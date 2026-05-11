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
  Recipe,
  RecipeDocument,
} from '../modules/recipes/schemas/recipe.schema';

type RecipeSeedRow = {
  slug: string;
  title: { en: string; am: string };
  description: { en: string; am: string };
  imageWebPath: string;
  bgColor: string;
  sortOrder: number;
  published?: boolean;
};

const workspaceRoot = path.resolve(__dirname, '../../../..');
const seedDataPath = path.join(
  workspaceRoot,
  'apps/frontend/src/app/[locale]/recipes/seed-data.ts',
);
const frontendPublicPath = path.join(workspaceRoot, 'apps/frontend/public');
const uploadFolder = 'vita/recipes';

function toPublicAssetPath(webPath: string): string {
  return path.join(frontendPublicPath, webPath.replace(/^\//, ''));
}

async function uploadLocalAsset(
  cloudinary: CloudinaryService,
  webPath: string | undefined,
  cache: Map<string, string>,
): Promise<string | undefined> {
  if (!webPath) return undefined;
  const localPath = toPublicAssetPath(webPath);
  const cached = cache.get(localPath);
  if (cached) return cached;
  try {
    const fileBuffer = await readFile(localPath);
    const result = await cloudinary.uploadBuffer(fileBuffer, {
      folder: uploadFolder,
      resource_type: 'image',
    });
    cache.set(localPath, result.url);
    return result.url;
  } catch {
    console.warn(
      `Could not read/upload ${webPath}; using path as-is (may fail validation).`,
    );
    return webPath.startsWith('http') ? webPath : undefined;
  }
}

async function loadRecipeSeedRows(): Promise<RecipeSeedRow[]> {
  const source = await readFile(seedDataPath, 'utf-8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: seedDataPath,
  });

  const moduleShim = { exports: {} as Record<string, unknown> };
  const context = vm.createContext({
    module: moduleShim,
    exports: moduleShim.exports,
    require,
    __dirname: path.dirname(seedDataPath),
    __filename: seedDataPath,
    console,
    process,
  });
  vm.runInContext(transpiled.outputText, context);

  const rows = moduleShim.exports.recipeSeedRows;
  if (!Array.isArray(rows)) {
    throw new Error('Failed to load recipeSeedRows from frontend seed-data.ts');
  }
  return rows as RecipeSeedRow[];
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const recipeModel = app.get<Model<RecipeDocument>>(
    getModelToken(Recipe.name),
  );
  const cloudinary = app.get(CloudinaryService);
  const uploadCache = new Map<string, string>();

  const rows = await loadRecipeSeedRows();
  let upserted = 0;

  for (const row of rows) {
    const imageUrl =
      (await uploadLocalAsset(cloudinary, row.imageWebPath, uploadCache)) ??
      row.imageWebPath;

    const payload = {
      slug: row.slug,
      title: row.title,
      description: row.description,
      media: { image: imageUrl },
      bgColor: row.bgColor,
      sortOrder: row.sortOrder,
      published: row.published ?? true,
    };

    await recipeModel
      .findOneAndUpdate(
        { slug: row.slug },
        { $set: payload },
        {
          upsert: true,
          returnDocument: 'after',
          setDefaultsOnInsert: true,
        },
      )
      .exec();
    upserted += 1;
  }

  console.log(`Recipe seeding completed. Upserted ${upserted} recipes.`);
  await app.close();
}

bootstrap().catch((error) => {
  console.error('Recipe seeding failed:', error);
  process.exit(1);
});
