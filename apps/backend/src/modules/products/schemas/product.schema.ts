import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type ProductDocument = Product & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ _id: false })
class NutritionItemSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true, enum: ['g', 'mg', 'kcal', '%'] })
  unit: string;

  @Prop()
  dailyValue?: number;
}

@Schema({ _id: false })
class NutritionSchema {
  @Prop({ required: true })
  servingSize: string;

  @Prop({ required: true })
  calories: number;

  @Prop({ type: [NutritionItemSchema], default: [] })
  items: NutritionItemSchema[];
}

@Schema({ _id: false })
class IngredientSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: ['main', 'additive', 'allergen'], required: false })
  type?: string;
}

@Schema({ _id: false })
class IngredientsSchema {
  @Prop({ type: [IngredientSchema], default: [] })
  list: IngredientSchema[];

  @Prop({ type: [String], default: [] })
  contains?: string[];

  @Prop({ type: [String], default: [] })
  mayContain?: string[];
}

@Schema({ _id: false })
class CertificationSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;
}

@Schema({ _id: false })
class ProductContentSchema {
  @Prop({ type: LocalizedStringSchema, required: true })
  description: LocalizedString;

  @Prop()
  netWeight?: string;

  @Prop({ type: NutritionSchema })
  nutrition?: NutritionSchema;

  @Prop({ type: IngredientsSchema })
  ingredients?: IngredientsSchema;

  @Prop({ type: [CertificationSchema], default: [] })
  certifications?: CertificationSchema[];
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: LocalizedStringSchema, required: true })
  name: LocalizedString;

  @Prop({ required: true, enum: ['Biscuit', 'Flour'] })
  category: string;

  @Prop({
    type: {
      image: { type: String, required: true },
      tagIcon: { type: String, required: false },
    },
    required: true,
  })
  media: { image: string; tagIcon?: string };

  @Prop({
    type: {
      bgColor: { type: String, required: true },
      textColor: { type: String, required: true },
      nameColor: { type: String, required: true },
    },
    required: true,
  })
  ui: { bgColor: string; textColor: string; nameColor: string };

  @Prop({ type: ProductContentSchema, required: true })
  content: ProductContentSchema;

  @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }], default: [] })
  relatedProducts?: Types.ObjectId[];

  @Prop({ default: true })
  available: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
