import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DonationDocument = Donation & Document;
export type DonationStatus = 'pending' | 'reviewed' | 'completed';
export type DonationType = 'money' | 'inkind';

@Schema({ timestamps: true })
export class Donation {
  @Prop({ enum: ['money', 'inkind'], required: true })
  type: DonationType;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  message?: string;

  // money donation
  @Prop()
  amount?: string;

  // inkind donation
  @Prop({ type: [String], default: [] })
  items: string[];

  @Prop({ enum: ['pending', 'reviewed', 'completed'], default: 'pending' })
  status: DonationStatus;
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
