import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donation, DonationDocument, DonationStatus, DonationType } from './schemas/donation.schema';

@Injectable()
export class DonationsService {
  constructor(@InjectModel(Donation.name) private model: Model<DonationDocument>) {}

  async create(data: Partial<Donation>): Promise<DonationDocument> {
    return new this.model(data).save();
  }

  async findAll(type?: DonationType, status?: DonationStatus): Promise<DonationDocument[]> {
    const filter: Record<string, string> = {};
    if (type) filter.type = type;
    if (status) filter.status = status;
    return this.model.find(filter).sort({ createdAt: -1 }).exec();
  }

  async updateStatus(id: string, status: DonationStatus): Promise<DonationDocument | null> {
    return this.model.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
