import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Donation, DonationDocument, DonationStatus, DonationType } from './schemas/donation.schema';
import { DonationMailerService } from './donation-mailer.service';

@Injectable()
export class DonationsService {
  constructor(
    @InjectModel(Donation.name) private model: Model<DonationDocument>,
    private readonly mailerService: DonationMailerService,
  ) {}

  async create(data: Partial<Donation>): Promise<DonationDocument> {
    const saved = await new this.model(data).save();
    if (data.fullName && data.email && data.phone && data.type) {
      this.mailerService
        .sendDonationEmails({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          type: data.type,
          amount: data.amount,
          items: data.items,
          message: data.message,
        })
        .catch(() => {});
    }
    return saved;
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
