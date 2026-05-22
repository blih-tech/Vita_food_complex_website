import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

export type NotificationType =
  | 'contact_message'
  | 'customer_care'
  | 'distributor_application'
  | 'donation';

@Schema({ timestamps: true })
export class Notification {
  @Prop({
    required: true,
    enum: ['contact_message', 'customer_care', 'distributor_application', 'donation'],
  })
  type: NotificationType;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  body: string;

  @Prop({ default: false })
  isRead: boolean;

  @Prop({ required: true })
  link: string;

  @Prop()
  resourceId: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
