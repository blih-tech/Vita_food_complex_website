import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class LocalizedStringDto {
  @IsString()
  en: string;

  @IsOptional()
  @IsString()
  am?: string;
}

export class CreateNewsDto {
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  summary: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  content: LocalizedStringDto;

  @IsEnum(['news', 'updates', 'market-insights', 'company-news', 'product-updates'])
  category: 'news' | 'updates' | 'market-insights' | 'company-news' | 'product-updates';

  @IsString()
  coverImage: string;

  @IsString()
  readTime: string;

  @IsDateString()
  publishedAt: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}
