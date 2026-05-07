import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactMessageDocument = ContactMessage & Document;

@Schema({ timestamps: true })
export class ContactMessage {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  agreeToTerms: boolean;

  @Prop({ enum: ['new', 'read', 'archived'], default: 'new' })
  status: 'new' | 'read' | 'archived';

  @Prop()
  readAt?: Date;
}

export const ContactMessageSchema = SchemaFactory.createForClass(ContactMessage);
