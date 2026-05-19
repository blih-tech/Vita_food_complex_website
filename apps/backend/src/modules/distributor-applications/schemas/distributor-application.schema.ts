import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DistributorApplicationDocument = DistributorApplication & Document;

export type DistributorApplicationStatus = 'pending' | 'reviewing' | 'approved' | 'rejected';

@Schema({ timestamps: true })
export class DistributorApplication {
  // ── Business Information ──
  @Prop({ required: true })
  businessName: string;

  @Prop({ required: true })
  businessType: string;

  @Prop({ required: true })
  businessId: string;

  @Prop({ required: true })
  contactPerson: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  // ── Location Details ──
  @Prop({ required: true })
  warehouseAddress: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  fullAddress: string;

  @Prop()
  additionalNote?: string;

  // ── Products Interest ──
  @Prop({ type: [String], default: [] })
  productInterests: string[];

  // ── Status tracking ──
  @Prop({
    enum: ['pending', 'reviewing', 'approved', 'rejected'],
    default: 'pending',
  })
  status: DistributorApplicationStatus;

  @Prop()
  reviewedAt?: Date;

  @Prop()
  adminNote?: string;
}

export const DistributorApplicationSchema =
  SchemaFactory.createForClass(DistributorApplication);
