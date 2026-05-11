import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';

class LocalizedStringDto {
  @IsString()
  en: string;

  @IsString()
  am: string;
}

class RecipeMediaDto {
  @IsString()
  image: string;
}

export class CreateRecipeDto {
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, {
    message: 'slug must be URL-safe (letters, numbers, hyphens)',
  })
  slug: string;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description: LocalizedStringDto;

  @ValidateNested()
  @Type(() => RecipeMediaDto)
  media: RecipeMediaDto;

  @IsString()
  bgColor: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;

  @IsOptional()
  @IsBoolean()
  published?: boolean;
}
