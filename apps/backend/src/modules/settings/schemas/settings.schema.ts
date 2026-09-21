import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import type { LocalizedString } from '@repo/types';

export type SiteSettingsDocument = SiteSettings & Document;

@Schema({ _id: false })
class LocalizedStringSchema {
  @Prop({ required: true })
  en: string;

  @Prop({ required: true })
  am: string;
}

@Schema({ timestamps: true })
export class SiteSettings {
  @Prop({ type: LocalizedStringSchema, required: true })
  siteName: LocalizedString;

  @Prop({ type: Object })
  logoUrl: { light: string; dark: string };

  @Prop({ type: Object })
  analytics: { ga4Id: string };

  @Prop({ type: Object })
  socialLinks: { facebook?: string; instagram?: string; linkedin?: string; twitter?: string; youtube?: string; tiktok?: string };

  @Prop({ type: Object, default: {} })
  footer: {
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonLabel?: string;
    newsletterTitle?: string;
    phones?: string[];
    email?: string;
    addressLines?: string[];
    copyrightText?: string;
    termsLabel?: string;
    termsHref?: string;
    privacyLabel?: string;
    privacyHref?: string;
    legalLabel?: string;
    legalHref?: string;
  };
}

export const SiteSettingsSchema = SchemaFactory.createForClass(SiteSettings);
