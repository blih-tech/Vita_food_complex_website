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
  @IsOptional()
  @IsString()
  en?: string;

  @IsOptional()
  @IsString()
  am?: string;
}

class RecipeMediaDto {
  @IsOptional()
  @IsString()
  image?: string;
}

export class UpdateRecipeDto {
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, {
    message: 'slug must be URL-safe (letters, numbers, hyphens)',
  })
  slug?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title?: LocalizedStringDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description?: LocalizedStringDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => RecipeMediaDto)
  media?: RecipeMediaDto;

  @IsOptional()
  @IsString()
  bgColor?: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;

  @IsOptional()
  @IsBoolean()
  published?: boolean;
}
