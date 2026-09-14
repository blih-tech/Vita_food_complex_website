import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page, PageDocument } from './schemas/page.schema';

const HOME_QUICK_FACT_BASELINE = {
  en: {
    biscuits: {
      legacyValue: '2tn',
      value: '1,600 kg/hr',
      label: 'Biscuit Production Capacity',
    },
    flour: {
      legacyValue: '60tn',
      value: '100 T',
      label: 'Flour Production Capacity',
    },
    investment: {
      legacyValue: '$1.4M',
      legacyValue2: 'Br210M',
      value: '423,566,605 Birr',
      value2: '',
      label: 'Total Investment',
    },
  },
  am: {
    biscuits: {
      legacyValue: '2tn',
      value: '1,600 ኪ.ግ/ሰዓት',
      label: 'የቢስኩት የማምረት አቅም',
    },
    flour: {
      legacyValue: '60tn',
      value: '100 ቶን',
      label: 'የዱቄት የማምረት አቅም',
    },
    investment: {
      legacyValue: '$1.4M',
      legacyValue2: 'Br210M',
      value: '423,566,605 ብር',
      value2: '',
      label: 'ጠቅላላ ኢንቨስትመንት',
    },
  },
} as const;

@Injectable()
export class ContentService {
  constructor(@InjectModel(Page.name) private pageModel: Model<PageDocument>) {}

  private applyHomeQuickFactBaseline(page: PageDocument): PageDocument {
    if (page.slug !== 'home') return page;

    const section = page.sections.find(
      (item) => item.id === 'quick-facts' || item.type === 'quick-facts',
    );
    if (!section?.content || typeof section.content !== 'object') return page;

    for (const locale of ['en', 'am'] as const) {
      const localized = section.content[locale];
      if (!localized || !Array.isArray(localized.facts)) continue;

      const baselines = HOME_QUICK_FACT_BASELINE[locale];
      localized.facts = localized.facts.map((fact: any) => {
        const baseline = baselines[fact?.id as keyof typeof baselines];
        if (!baseline || fact.value !== baseline.legacyValue) return fact;

        if (
          'legacyValue2' in baseline &&
          fact.value2 !== baseline.legacyValue2
        ) {
          return fact;
        }

        return {
          ...fact,
          value: baseline.value,
          ...('value2' in baseline ? { value2: baseline.value2 } : {}),
          label: baseline.label,
        };
      });
    }

    return page;
  }

  async findAll(): Promise<PageDocument[]> {
    return this.pageModel.find().exec();
  }

  async findBySlug(slug: string): Promise<PageDocument> {
    const page = await this.pageModel.findOne({ slug }).exec();
    if (!page) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return this.applyHomeQuickFactBaseline(page);
  }

  async create(pageData: any): Promise<PageDocument> {
    const newPage = new this.pageModel(pageData);
    return newPage.save();
  }

  async update(slug: string, updateData: any): Promise<PageDocument> {
    const page = await this.pageModel
      .findOneAndUpdate({ slug }, updateData, { new: true })
      .exec();
    if (!page) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return page;
  }

  async updateSection(
    slug: string,
    sectionId: string,
    content: any,
  ): Promise<PageDocument> {
    // First verify the page + section exist
    const exists = await this.pageModel
      .findOne({ slug, 'sections.id': sectionId })
      .exec();
    if (!exists) {
      const page = await this.pageModel.findOne({ slug }).exec();
      if (!page) throw new NotFoundException(`Page '${slug}' not found`);
      throw new NotFoundException(
        `Section '${sectionId}' not found in page '${slug}'`,
      );
    }
    // Use positional $ operator + $set to avoid Mixed-type subdocument mutation issues
    const updated = await this.pageModel
      .findOneAndUpdate(
        { slug, 'sections.id': sectionId },
        { $set: { 'sections.$.content': content } },
        { new: true },
      )
      .exec();
    return updated!;
  }

  async upsert(slug: string, pageData: any): Promise<PageDocument> {
    const { _id, ...data } = pageData;
    return this.pageModel
      .findOneAndUpdate(
        { slug },
        { $set: { title: data.title, sections: data.sections } },
        { new: true, upsert: true },
      )
      .exec() as Promise<PageDocument>;
  }

  async delete(slug: string): Promise<any> {
    const result = await this.pageModel.deleteOne({ slug }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Page with slug ${slug} not found`);
    }
    return result;
  }
}
