import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerCareSubmissionDocument = CustomerCareSubmission & Document;

@Schema({ timestamps: true })
export class CustomerCareSubmission {
  @Prop({ required: true, enum: ['feedback', 'complaint', 'compliment'] })
  kind: 'feedback' | 'complaint' | 'compliment';

  /** UI locale used on the site */
  @Prop({ default: 'en' })
  locale: string;

  /** Short label for admin list/search */
  @Prop({ required: true })
  summary: string;

  @Prop({ type: Object, required: true })
  payload: Record<string, unknown>;

  @Prop({ enum: ['new', 'read', 'archived'], default: 'new' })
  status: 'new' | 'read' | 'archived';

  @Prop()
  readAt?: Date;
}

export const CustomerCareSubmissionSchema = SchemaFactory.createForClass(CustomerCareSubmission);
