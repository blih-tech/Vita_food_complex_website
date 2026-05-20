import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type NewsDocument = News & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ default: '' })
  am: string;
}

@Schema({ timestamps: true })
export class News {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: LocalizedStringSchema, required: true })
  title: LocalizedString;

  @Prop({ type: LocalizedStringSchema, required: true })
  summary: LocalizedString;

  @Prop({ type: LocalizedStringSchema, required: true })
  content: LocalizedString;

  @Prop({
    required: true,
    enum: ['news', 'updates', 'market-insights', 'company-news', 'product-updates'],
  })
  category: string;

  @Prop({ required: true })
  coverImage: string;

  @Prop({ required: true })
  readTime: string;

  @Prop({ required: true })
  publishedAt: Date;

  @Prop({ default: false })
  isPublished: boolean;
}

export const NewsSchema = SchemaFactory.createForClass(News);
