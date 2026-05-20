import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerCareSubmissionDto } from './dto/create-customer-care-submission.dto';
import { UpdateCustomerCareSubmissionDto } from './dto/update-customer-care-submission.dto';
import {
  CustomerCareSubmission,
  CustomerCareSubmissionDocument,
} from './schemas/customer-care-submission.schema';
import { CustomerCareMailerService } from './customer-care-mailer.service';

const MAX_PAYLOAD_BYTES = 96_000;

@Injectable()
export class CustomerCareSubmissionsService {
  constructor(
    @InjectModel(CustomerCareSubmission.name)
    private readonly model: Model<CustomerCareSubmissionDocument>,
    private readonly mailerService: CustomerCareMailerService,
  ) {}

  private buildSummary(kind: 'feedback' | 'complaint' | 'compliment', payload: Record<string, unknown>): string {
    if (kind === 'complaint') {
      const name =
        String(payload.customerName ?? '')
          .trim() || String(payload.complainantName ?? '').trim();
      const phone = String(payload.phone ?? '').trim();
      if (name) return `Complaint · ${name}`;
      if (phone) return `Complaint · ${phone}`;
      return 'Complaint';
    }

    if (kind === 'compliment') {
      const name = String(payload.customerName ?? '').trim();
      return name ? `Compliment · ${name}` : 'Compliment';
    }

    const ref = payload.reference;
    let refName = '';
    if (ref && typeof ref === 'object' && ref !== null && 'name' in ref) {
      refName = String((ref as { name?: string }).name ?? '').trim();
    }
    return refName ? `Feedback · ${refName}` : 'Feedback';
  }

  async create(body: CreateCustomerCareSubmissionDto): Promise<CustomerCareSubmissionDocument> {
    const serialized = JSON.stringify(body.payload);
    if (serialized.length > MAX_PAYLOAD_BYTES) {
      throw new BadRequestException('Payload too large');
    }

    const doc = new this.model({
      kind: body.kind,
      locale: body.locale ?? 'en',
      summary: this.buildSummary(body.kind, body.payload),
      payload: body.payload,
      status: 'new',
    });
    return doc.save().then((saved) => {
      this.mailerService
        .sendSubmissionNotification(body.kind, saved.summary, body.payload)
        .catch(() => {});
      return saved;
    });
  }

  async findAll(): Promise<CustomerCareSubmissionDocument[]> {
    return this.model.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<CustomerCareSubmissionDocument> {
    const item = await this.model.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`Submission ${id} not found`);
    }
    return item;
  }

  async update(id: string, body: UpdateCustomerCareSubmissionDto): Promise<CustomerCareSubmissionDocument> {
    const patch: Partial<CustomerCareSubmission> = { ...body };
    if (body.status === 'read') {
      patch.readAt = new Date();
    }
    const item = await this.model.findByIdAndUpdate(id, patch, { new: true }).exec();
    if (!item) {
      throw new NotFoundException(`Submission ${id} not found`);
    }
    return item;
  }

  async remove(id: string): Promise<{ deletedCount?: number }> {
    const result = await this.model.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Submission ${id} not found`);
    }
    return result;
  }
}
