import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FAQDocument = FAQ & Document;

class LocalizedString {
  @Prop({ default: '' }) en: string;
  @Prop({ default: '' }) am: string;
}

@Schema({ timestamps: true })
export class FAQ {
  @Prop({ type: LocalizedString, _id: false })
  question: LocalizedString;

  @Prop({ type: LocalizedString, _id: false })
  answer: LocalizedString;

  @Prop({ type: Number, default: 0 })
  position: number;

  @Prop({ default: true })
  isPublished: boolean;
}

export const FAQSchema = SchemaFactory.createForClass(FAQ);
