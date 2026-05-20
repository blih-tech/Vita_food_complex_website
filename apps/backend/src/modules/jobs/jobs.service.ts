import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from './schemas/job.schema';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { slugify } from '../../common/utils/slugify';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  /**
   * Generate a unique id (slug) from the English title.
   * Appends `-2`, `-3`, etc. when a collision is detected.
   */
  private async generateUniqueId(
    title: string,
    excludeMongoId?: string,
  ): Promise<string> {
    const base = slugify(title);
    if (!base) throw new ConflictException('Title must produce a valid slug');

    let candidate = base;
    let counter = 1;

    while (true) {
      const query: Record<string, unknown> = { id: candidate };
      if (excludeMongoId) query._id = { $ne: excludeMongoId };

      const existing = await this.jobModel.findOne(query).lean().exec();
      if (!existing) return candidate;

      counter++;
      candidate = `${base}-${counter}`;
    }
  }

  async findAll(): Promise<JobDocument[]> {
    return this.jobModel.find().exec();
  }

  async count(): Promise<number> {
    return this.jobModel.countDocuments().exec();
  }

  async findById(id: string): Promise<JobDocument> {
    const job = await this.jobModel.findOne({ id }).exec();
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    return job;
  }

  async create(jobData: CreateJobDto): Promise<JobDocument> {
    const id = await this.generateUniqueId(jobData.title.en);
    const newJob = new this.jobModel({ ...jobData, id });
    return newJob.save();
  }

  async update(id: string, updateData: UpdateJobDto): Promise<JobDocument> {
    // Look up the existing document to get its Mongo _id for collision exclusion
    const existing = await this.jobModel.findOne({ id }).exec();
    if (!existing) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }

    const parsed: Record<string, unknown> = { ...updateData };

    // Re-generate id slug when the title changes
    if (updateData.title?.en) {
      parsed.id = await this.generateUniqueId(
        updateData.title.en,
        existing._id.toString(),
      );
    }

    const job = await this.jobModel
      .findOneAndUpdate({ id }, parsed, { new: true })
      .exec();
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    return job;
  }

  async delete(id: string): Promise<{ deletedCount?: number }> {
    const result = await this.jobModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Job with id ${id} not found`);
    }
    return result;
  }
}
