import { readFile } from 'node:fs/promises';
import * as path from 'node:path';
import * as vm from 'node:vm';
import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ts from 'typescript';
import { AppModule } from '../app.module';
import { CloudinaryService } from '../modules/cloudinary/cloudinary.service';
import {
  Product,
  ProductDocument,
} from '../modules/products/schemas/product.schema';

type FrontendProduct = {
  id: string;
  name: string;
  category: 'Biscuit' | 'Flour';
  media: {
    image: string;
    tagIcon?: string;
  };
  ui: {
    bgColor: string;
    textColor: string;
    nameColor: string;
  };
  relatedProducts?: string[];
  content?: {
    description?: string;
    netWeight?: string;
    nutrition?: {
      servingSize: string;
      calories: number;
      items: Array<{
        name: string;
        value: number;
        unit: 'g' | 'mg' | 'kcal' | '%';
        dailyValue?: number;
      }>;
    };
    ingredients?: {
      list: Array<{ name: string; type?: 'main' | 'additive' | 'allergen' }>;
      contains?: string[];
      mayContain?: string[];
    };
    certifications?: Array<{ name: string; image: string }>;
  };
};

const workspaceRoot = path.resolve(__dirname, '../../../..');
const frontendProductsDataPath = path.join(
  workspaceRoot,
  'apps/frontend/src/app/[locale]/products/data.ts',
);
const frontendPublicPath = path.join(workspaceRoot, 'apps/frontend/public');
const uploadFolder = 'vita/products';

function toLocalized(value?: string): { en: string; am: string } {
  const safe = (value ?? '').trim();
  return { en: safe, am: safe };
}

function toPublicAssetPath(webPath: string): string {
  return path.join(frontendPublicPath, webPath.replace(/^\//, ''));
}

function requireAssetPath(webPath?: string): string | undefined {
  if (!webPath) return undefined;
  if (!webPath.startsWith('/assets/products/')) {
    return undefined;
  }
  return toPublicAssetPath(webPath);
}

async function uploadLocalAsset(
  cloudinary: CloudinaryService,
  webPath: string | undefined,
  cache: Map<string, string>,
): Promise<string | undefined> {
  const localPath = requireAssetPath(webPath);
  if (!localPath) {
    return webPath;
  }
  const cached = cache.get(localPath);
  if (cached) {
    return cached;
  }
  const fileBuffer = await readFile(localPath);
  const result = await cloudinary.uploadBuffer(fileBuffer, {
    folder: uploadFolder,
    resource_type: 'image',
  });
  cache.set(localPath, result.url);
  return result.url;
}

async function loadFrontendProducts(): Promise<FrontendProduct[]> {
  const source = await readFile(frontendProductsDataPath, 'utf-8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: frontendProductsDataPath,
  });

  const moduleShim = { exports: {} as Record<string, unknown> };
  const context = vm.createContext({
    module: moduleShim,
    exports: moduleShim.exports,
    require,
    __dirname: path.dirname(frontendProductsDataPath),
    __filename: frontendProductsDataPath,
    console,
    process,
  });
  vm.runInContext(transpiled.outputText, context);

  const products = moduleShim.exports.products;
  if (!Array.isArray(products)) {
    throw new Error('Failed to load products array from frontend data.ts');
  }
  return products as FrontendProduct[];
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productModel = app.get<Model<ProductDocument>>(
    getModelToken(Product.name),
  );
  const cloudinary = app.get(CloudinaryService);
  const uploadCache = new Map<string, string>();

  // Legacy cleanup: old schema used unique `id`, which blocks slug-based upserts.
  try {
    const hasLegacyIdIndex = await productModel.collection.indexExists('id_1');
    if (hasLegacyIdIndex) {
      await productModel.collection.dropIndex('id_1');
      console.log('Dropped legacy index: id_1');
    }
  } catch (error) {
    console.warn('Skipping legacy index cleanup:', error);
  }

  const frontendProducts = await loadFrontendProducts();
  let upserted = 0;
  const slugToId = new Map<string, string>();

  for (const product of frontendProducts) {
    const imageUrl = await uploadLocalAsset(
      cloudinary,
      product.media.image,
      uploadCache,
    );
    const tagIconUrl = await uploadLocalAsset(
      cloudinary,
      product.media.tagIcon,
      uploadCache,
    );

    const content = product.content ?? {};
    const payload = {
      slug: product.id,
      name: toLocalized(product.name),
      category: product.category,
      media: {
        image: imageUrl ?? product.media.image,
        ...(tagIconUrl ? { tagIcon: tagIconUrl } : {}),
      },
      ui: product.ui,
      relatedProducts: [],
      content: {
        description: toLocalized(content.description),
        ...(content.netWeight ? { netWeight: content.netWeight } : {}),
        ...(content.nutrition ? { nutrition: content.nutrition } : {}),
        ...(content.ingredients ? { ingredients: content.ingredients } : {}),
        ...(content.certifications
          ? { certifications: content.certifications }
          : {}),
      },
      available: true,
    };

    const saved = await productModel
      .findOneAndUpdate(
        { slug: payload.slug },
        { $set: payload, $unset: { id: '' } },
        {
          upsert: true,
          returnDocument: 'after',
          setDefaultsOnInsert: true,
        },
      )
      .exec();
    if (saved?._id) {
      slugToId.set(product.id, String(saved._id));
    }

    upserted += 1;
  }

  for (const product of frontendProducts) {
    const relatedIds = (product.relatedProducts ?? [])
      .map((slug) => slugToId.get(slug))
      .filter((id): id is string => Boolean(id));
    await productModel
      .findOneAndUpdate(
        { slug: product.id },
        { relatedProducts: Array.from(new Set(relatedIds)) },
        { returnDocument: 'after' },
      )
      .exec();
  }

  console.log(`Product seeding completed. Upserted ${upserted} products.`);
  await app.close();
}

bootstrap().catch((error) => {
  console.error('Product seeding failed:', error);
  process.exit(1);
});
