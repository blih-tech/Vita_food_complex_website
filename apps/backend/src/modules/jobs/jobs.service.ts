import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from './schemas/job.schema';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

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
    const newJob = new this.jobModel(jobData);
    return newJob.save();
  }

  async update(id: string, updateData: UpdateJobDto): Promise<JobDocument> {
    const job = await this.jobModel.findOneAndUpdate({ id }, updateData, { new: true }).exec();
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
