import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type ContactInfoDocument = ContactInfo & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ timestamps: true })
export class ContactInfo {
  @Prop({ required: true })
  email: string;

  @Prop({ type: [String], default: [] })
  phone: string[];

  @Prop({ type: LocalizedStringSchema, required: true })
  address: LocalizedString;
}

export const ContactInfoSchema = SchemaFactory.createForClass(ContactInfo);
