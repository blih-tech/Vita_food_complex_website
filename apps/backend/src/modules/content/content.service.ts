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

  async delete(slug: string): Promise<any> {
    const result = await this.pageModel.deleteOne({ slug }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return result;
  }
}
