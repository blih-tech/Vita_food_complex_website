import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type ProductDocument = Product & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: LocalizedStringSchema, required: true })
  name: LocalizedString;

  @Prop({ required: true, enum: ['Biscuit', 'Flour'] })
  category: string;

  @Prop({ type: Object })
  media: { image: string; gallery?: string[] };

  @Prop({ type: Object })
  ui: { bgColor: string; textColor: string; nameColor: string };

  @Prop({ type: Object })
  content: { description: LocalizedString };

  @Prop({ default: true })
  available: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
