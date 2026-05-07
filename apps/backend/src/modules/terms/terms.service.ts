import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TermSection, TermSectionDocument } from './schemas/term-section.schema';

@Injectable()
export class TermsService {
  constructor(@InjectModel(TermSection.name) private model: Model<TermSectionDocument>) {}

  async findPublished(): Promise<TermSectionDocument[]> {
    return this.model.find({ isPublished: true }).sort({ position: 1 }).exec();
  }

  async findAll(): Promise<TermSectionDocument[]> {
    return this.model.find().sort({ position: 1 }).exec();
  }

  async create(data: Partial<TermSection>): Promise<TermSectionDocument> {
    const count = await this.model.countDocuments();
    return new this.model({ ...data, position: count }).save();
  }

  async update(id: string, data: Partial<TermSection>): Promise<TermSectionDocument | null> {
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
