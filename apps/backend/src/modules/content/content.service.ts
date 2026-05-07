import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page, PageDocument } from './schemas/page.schema';

@Injectable()
export class ContentService {
  constructor(@InjectModel(Page.name) private pageModel: Model<PageDocument>) {}

  async findAll(): Promise<PageDocument[]> {
    return this.pageModel.find().exec();
  }

  async findBySlug(slug: string): Promise<PageDocument> {
    const page = await this.pageModel.findOne({ slug }).exec();
    if (!page) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return page;
  }

  async create(pageData: any): Promise<PageDocument> {
    const newPage = new this.pageModel(pageData);
    return newPage.save();
  }

  async update(slug: string, updateData: any): Promise<PageDocument> {
    const page = await this.pageModel.findOneAndUpdate({ slug }, updateData, { new: true }).exec();
    if (!page) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return page;
  }

  async updateSection(slug: string, sectionId: string, content: any): Promise<PageDocument> {
    // First verify the page + section exist
    const exists = await this.pageModel.findOne({ slug, 'sections.id': sectionId }).exec();
    if (!exists) {
      const page = await this.pageModel.findOne({ slug }).exec();
      if (!page) throw new NotFoundException(`Page '${slug}' not found`);
      throw new NotFoundException(`Section '${sectionId}' not found in page '${slug}'`);
    }
    // Use positional $ operator + $set to avoid Mixed-type subdocument mutation issues
    const updated = await this.pageModel.findOneAndUpdate(
      { slug, 'sections.id': sectionId },
      { $set: { 'sections.$.content': content } },
      { new: true },
    ).exec();
    return updated!;
  }

  async upsert(slug: string, pageData: any): Promise<PageDocument> {
    const { _id, ...data } = pageData;
    return this.pageModel.findOneAndUpdate(
      { slug },
      { $set: { title: data.title, sections: data.sections } },
      { new: true, upsert: true },
    ).exec() as Promise<PageDocument>;
  }

  async delete(slug: string): Promise<any> {
    const result = await this.pageModel.deleteOne({ slug }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return result;
  }
}
