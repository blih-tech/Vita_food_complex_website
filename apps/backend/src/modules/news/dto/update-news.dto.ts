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

  @IsString()
  am: string;
}

export class UpdateNewsDto {
  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title?: LocalizedStringDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  summary?: LocalizedStringDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  content?: LocalizedStringDto;

  @IsOptional()
  @IsEnum(['news', 'updates', 'market-insights', 'company-news', 'product-updates'])
  category?: 'news' | 'updates' | 'market-insights' | 'company-news' | 'product-updates';

  @IsOptional()
  @IsString()
  coverImage?: string;

  @IsOptional()
  @IsString()
  readTime?: string;

  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}
