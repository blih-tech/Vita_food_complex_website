import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Application, ApplicationDocument, ApplicationStatus } from './schemas/application.schema';
import { ApplicationMailerService } from './application-mailer.service';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application.name) private model: Model<ApplicationDocument>,
    private readonly mailerService: ApplicationMailerService,
  ) {}

  async create(data: Partial<Application>): Promise<ApplicationDocument> {
    const saved = await new this.model(data).save();
    if (data.firstName && data.lastName && data.email && data.phone && data.jobId) {
      this.mailerService
        .sendApplicationEmails({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          jobId: data.jobId,
        })
        .catch(() => {});
    }
    return saved;
  }

  async findAll(jobId?: string): Promise<ApplicationDocument[]> {
    const filter = jobId ? { jobId } : {};
    return this.model.find(filter).sort({ createdAt: -1 }).exec();
  }

  async countByJob(): Promise<{ jobId: string; count: number }[]> {
    return this.model.aggregate([
      { $group: { _id: '$jobId', count: { $sum: 1 } } },
      { $project: { _id: 0, jobId: '$_id', count: 1 } },
    ]).exec();
  }

  async updateStatus(id: string, status: ApplicationStatus): Promise<ApplicationDocument | null> {
    return this.model.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
