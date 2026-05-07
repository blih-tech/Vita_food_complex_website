import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TermSectionDocument = TermSection & Document;

class LocalizedString {
  @Prop({ default: '' }) en: string;
  @Prop({ default: '' }) am: string;
}

@Schema({ timestamps: true })
export class TermSection {
  @Prop({ required: true })
  sectionId: string; // anchor slug e.g. "acceptance"

  @Prop({ type: LocalizedString, _id: false })
  title: LocalizedString;

  @Prop({ type: LocalizedString, _id: false })
  body: LocalizedString; // rich HTML content

  @Prop({ type: Number, default: 0 })
  position: number;

  @Prop({ default: true })
  isPublished: boolean;
}

export const TermSectionSchema = SchemaFactory.createForClass(TermSection);
