import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FAQ, FAQDocument } from './schemas/faq.schema';

@Injectable()
export class FAQsService {
  constructor(@InjectModel(FAQ.name) private model: Model<FAQDocument>) {}

  async findPublished(): Promise<FAQDocument[]> {
    return this.model.find({ isPublished: true }).sort({ position: 1 }).exec();
  }

  async findAll(): Promise<FAQDocument[]> {
    return this.model.find().sort({ position: 1 }).exec();
  }

  async create(data: Partial<FAQ>): Promise<FAQDocument> {
    const count = await this.model.countDocuments();
    return new this.model({ ...data, position: count }).save();
  }

  async update(id: string, data: Partial<FAQ>): Promise<FAQDocument | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async updatePositions(updates: { id: string; position: number }[]): Promise<void> {
    await Promise.all(
      updates.map(({ id, position }) =>
        this.model.findByIdAndUpdate(id, { position }).exec(),
      ),
    );
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
