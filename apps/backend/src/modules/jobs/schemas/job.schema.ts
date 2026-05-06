import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type JobDocument = Job & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: LocalizedStringSchema, required: true })
  title: LocalizedString;

  @Prop({ type: LocalizedStringSchema, required: true })
  location: LocalizedString;

  @Prop({ type: LocalizedStringSchema, required: true })
  type: LocalizedString;

  @Prop({ type: LocalizedStringSchema, required: true })
  department: LocalizedString;

  @Prop({ type: LocalizedStringSchema })
  reportsTo?: LocalizedString;

  @Prop({ type: LocalizedStringSchema, required: true })
  summary: LocalizedString;

  @Prop({ type: [LocalizedStringSchema], default: [] })
  responsibilities: LocalizedString[];

  @Prop({ type: [LocalizedStringSchema], default: [] })
  requirements: LocalizedString[];

  @Prop({ type: [LocalizedStringSchema], default: [] })
  benefits: LocalizedString[];

  @Prop({ default: true })
  active: boolean;
}

export const JobSchema = SchemaFactory.createForClass(Job);
