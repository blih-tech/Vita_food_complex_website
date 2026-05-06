import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type PageDocument = Page & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ _id: false })
class PageSectionSchema {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  type: string;

  @Prop({ type: MongooseSchema.Types.Mixed, required: true })
  content: any;
}

@Schema({ timestamps: true })
export class Page {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: LocalizedStringSchema, required: true })
  title: LocalizedString;

  @Prop({ type: [PageSectionSchema], default: [] })
  sections: PageSectionSchema[];
}

export const PageSchema = SchemaFactory.createForClass(Page);
