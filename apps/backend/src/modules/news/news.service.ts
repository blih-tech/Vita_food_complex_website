import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}

  async findAll(publishedOnly = true): Promise<NewsDocument[]> {
    const filter = publishedOnly ? { isPublished: true } : {};
    return this.newsModel.find(filter).sort({ publishedAt: -1, createdAt: -1 }).exec();
  }

  async findAllAdmin(): Promise<NewsDocument[]> {
    return this.newsModel.find().sort({ publishedAt: -1, createdAt: -1 }).exec();
  }

  async findBySlug(slug: string): Promise<NewsDocument> {
    const news = await this.newsModel.findOne({ slug }).exec();
    if (!news) {
      throw new NotFoundException(`News with slug ${slug} not found`);
    }
    return news;
  }

  async create(newsData: CreateNewsDto): Promise<NewsDocument> {
    const newItem = new this.newsModel({
      ...newsData,
      publishedAt: new Date(newsData.publishedAt),
    });
    return newItem.save();
  }

  async update(id: string, updateData: UpdateNewsDto): Promise<NewsDocument> {
    const parsed = {
      ...updateData,
      ...(updateData.publishedAt ? { publishedAt: new Date(updateData.publishedAt) } : {}),
    };
    const updated = await this.newsModel.findByIdAndUpdate(id, parsed, { new: true }).exec();
    if (!updated) {
      throw new NotFoundException(`News with id ${id} not found`);
    }
    return updated;
  }

  async delete(id: string): Promise<{ deletedCount?: number }> {
    const result = await this.newsModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`News with id ${id} not found`);
    }
    return result;
  }
}
