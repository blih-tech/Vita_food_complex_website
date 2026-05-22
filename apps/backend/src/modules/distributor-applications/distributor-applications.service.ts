import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDistributorApplicationDto } from './dto/create-distributor-application.dto';
import { UpdateDistributorApplicationDto } from './dto/update-distributor-application.dto';
import {
  DistributorApplication,
  DistributorApplicationDocument,
} from './schemas/distributor-application.schema';
import { DistributorMailerService } from './distributor-mailer.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class DistributorApplicationsService {
  constructor(
    @InjectModel(DistributorApplication.name)
    private readonly model: Model<DistributorApplicationDocument>,
    private readonly mailerService: DistributorMailerService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async create(
    payload: CreateDistributorApplicationDto,
  ): Promise<DistributorApplicationDocument> {
    const doc = new this.model(payload);
    const saved = await doc.save();
    // Fire-and-forget email — don't block the API response
    this.mailerService.sendDistributorEmails(payload).catch(() => {});
    this.notificationsService.create({
      type: 'distributor_application',
      title: 'New Distributor Application',
      body: `${payload.businessName} (${payload.contactPerson}) applied to become a distributor`,
      link: '/distributor-submissions',
      resourceId: String(saved._id),
    }).catch(() => {});
    return saved;
  }

  async findAll(): Promise<DistributorApplicationDocument[]> {
    return this.model.find().sort({ createdAt: -1 }).exec();
  }

  async findById(id: string): Promise<DistributorApplicationDocument> {
    const doc = await this.model.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(
        `Distributor application with id ${id} not found`,
      );
    }
    return doc;
  }

  async update(
    id: string,
    payload: UpdateDistributorApplicationDto,
  ): Promise<DistributorApplicationDocument> {
    const patch: Partial<DistributorApplication> = {
      ...payload,
      ...(payload.status === 'reviewing' || payload.status === 'approved' || payload.status === 'rejected'
        ? { reviewedAt: new Date() }
        : {}),
    };
    const doc = await this.model
      .findByIdAndUpdate(id, patch, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(
        `Distributor application with id ${id} not found`,
      );
    }
    return doc;
  }

  async remove(id: string): Promise<{ deletedCount?: number }> {
    const result = await this.model.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        `Distributor application with id ${id} not found`,
      );
    }
    return result;
  }

  async countByStatus(): Promise<
    Record<string, number>
  > {
    const results = await this.model
      .aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ])
      .exec();
    const counts: Record<string, number> = {
      pending: 0,
      reviewing: 0,
      approved: 0,
      rejected: 0,
      total: 0,
    };
    for (const r of results) {
      counts[r._id as string] = r.count as number;
      counts.total += r.count as number;
    }
    return counts;
  }
}
