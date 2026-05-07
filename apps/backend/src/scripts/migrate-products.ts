/**
 * One-time migration: legacy `id` → `slug`, `media.gallery` → optional `media.tagIcon`.
 *
 * Run from apps/backend: pnpm exec ts-node -r tsconfig-paths/register src/scripts/migrate-products.ts
 */
import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppModule } from '../app.module';
import {
  Product,
  ProductDocument,
} from '../modules/products/schemas/product.schema';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productModel = app.get<Model<ProductDocument>>(
    getModelToken(Product.name),
  );

  const legacy = await productModel
    .find({
      $or: [{ id: { $exists: true } }, { 'media.gallery': { $exists: true } }],
    })
    .exec();

  let updated = 0;
  for (const doc of legacy) {
    const raw = doc.toObject() as unknown as {
      id?: string;
      slug?: string;
      media?: { image?: string; gallery?: string[]; tagIcon?: string };
    };

    const set: Record<string, unknown> = {};
    const unset: Record<string, string> = {};

    if (raw.id != null && raw.slug == null) {
      set.slug = raw.id;
      unset.id = '';
    }

    if (
      raw.media &&
      Array.isArray(raw.media.gallery) &&
      raw.media.gallery.length > 0
    ) {
      set['media.tagIcon'] = raw.media.gallery[0];
      unset['media.gallery'] = '';
    }

    if (Object.keys(set).length > 0 || Object.keys(unset).length > 0) {
      await productModel.updateOne(
        { _id: doc._id },
        {
          ...(Object.keys(set).length ? { $set: set } : {}),
          ...(Object.keys(unset).length ? { $unset: unset } : {}),
        },
      );
      updated += 1;
    }
  }

  console.log(
    `migrate-products: matched ${legacy.length} candidate(s), updated ${updated}.`,
  );
  await app.close();
}

bootstrap().catch((e) => {
  console.error(e);
  process.exit(1);
});
