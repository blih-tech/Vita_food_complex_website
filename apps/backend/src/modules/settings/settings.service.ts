import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SiteSettings, SiteSettingsDocument } from './schemas/settings.schema';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(SiteSettings.name) private settingsModel: Model<SiteSettingsDocument>) {}

  async getSettings(): Promise<SiteSettingsDocument[]> {
    return this.settingsModel.find().exec();
  }

  async updateSettings(updateData: any): Promise<SiteSettingsDocument> {
    const settings = await this.settingsModel.findOneAndUpdate({}, updateData, { upsert: true, new: true }).exec();
    return settings;
  }
}
