import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ timestamps: true })
export class Recipe {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: LocalizedStringSchema, required: true })
  title: { en: string; am: string };

  @Prop({ type: LocalizedStringSchema, required: true })
  description: { en: string; am: string };

  @Prop({
    type: {
      image: { type: String, required: true },
    },
    required: true,
  })
  media: { image: string };

  @Prop({ required: true })
  bgColor: string;

  @Prop({ default: 0 })
  sortOrder: number;

  @Prop({ default: true })
  published: boolean;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
