import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ApplicationDocument = Application & Document;

export type ApplicationStatus = 'pending' | 'shortlisted' | 'rejected';

@Schema({ timestamps: true })
export class Application {
  @Prop({ required: true })
  jobId: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  address?: string;

  @Prop()
  currentRole?: string;

  @Prop()
  yearsExperience?: string;

  @Prop()
  highestEducation?: string;

  @Prop()
  institution?: string;

  @Prop()
  fieldOfStudy?: string;

  @Prop()
  skills?: string;

  @Prop()
  coverLetter?: string;

  @Prop()
  additionalInfo?: string;

  @Prop({ required: true })
  cvUrl: string;

  @Prop({ required: true })
  cvPublicId: string;

  @Prop()
  cvFileName?: string;

  @Prop({ enum: ['pending', 'shortlisted', 'rejected'], default: 'pending' })
  status: ApplicationStatus;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
