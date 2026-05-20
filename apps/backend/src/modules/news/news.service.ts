import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News, NewsDocument } from './schemas/news.schema';
import { slugify } from '../../common/utils/slugify';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}

  /**
   * Generate a unique slug from the English title.
   * Appends `-2`, `-3`, etc. when a collision is detected.
   */
  private async generateUniqueSlug(
    title: string,
    excludeId?: string,
  ): Promise<string> {
    const base = slugify(title);
    if (!base) throw new ConflictException('Title must produce a valid slug');

    let candidate = base;
    let counter = 1;

    while (true) {
      const query: Record<string, unknown> = { slug: candidate };
      if (excludeId) query._id = { $ne: excludeId };

      const existing = await this.newsModel.findOne(query).lean().exec();
      if (!existing) return candidate;

      counter++;
      candidate = `${base}-${counter}`;
    }
  }

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
    const slug = await this.generateUniqueSlug(newsData.title.en);
    const newItem = new this.newsModel({
      ...newsData,
      slug,
      publishedAt: new Date(newsData.publishedAt),
    });
    return newItem.save();
  }

  async update(id: string, updateData: UpdateNewsDto): Promise<NewsDocument> {
    const parsed: Record<string, unknown> = {
      ...updateData,
      ...(updateData.publishedAt ? { publishedAt: new Date(updateData.publishedAt) } : {}),
    };

    // Re-generate slug when the title changes
    if (updateData.title?.en) {
      parsed.slug = await this.generateUniqueSlug(updateData.title.en, id);
    }

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
