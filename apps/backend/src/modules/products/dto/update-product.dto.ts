import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsMongoId,
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

class ProductMediaDto {
  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  tagIcon?: string;
}

class ProductUiDto {
  @IsOptional()
  @IsString()
  bgColor?: string;

  @IsOptional()
  @IsString()
  textColor?: string;

  @IsOptional()
  @IsString()
  nameColor?: string;
}

const NUTRITION_UNITS = ['g', 'mg', 'kcal', '%'] as const;
const INGREDIENT_TYPES = ['main', 'additive', 'allergen'] as const;

class NutritionItemDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsEnum(NUTRITION_UNITS)
  unit?: (typeof NUTRITION_UNITS)[number];

  @IsOptional()
  @IsNumber()
  dailyValue?: number;
}

class NutritionDto {
  @IsOptional()
  @IsString()
  servingSize?: string;

  @IsOptional()
  @IsNumber()
  calories?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => NutritionItemDto)
  @IsArray()
  items?: NutritionItemDto[];
}

class IngredientDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(INGREDIENT_TYPES)
  type?: (typeof INGREDIENT_TYPES)[number];
}

class IngredientsDto {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  @IsArray()
  list?: IngredientDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contains?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  mayContain?: string[];
}

class CertificationDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  image?: string;
}

class ProductContentDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description?: LocalizedStringDto;

  @IsOptional()
  @IsString()
  netWeight?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => NutritionDto)
  nutrition?: NutritionDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => IngredientsDto)
  ingredients?: IngredientsDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CertificationDto)
  @IsArray()
  certifications?: CertificationDto[];
}

class ColorVariationDto {
  @IsOptional()
  @IsString()
  colorCode?: string;

  @IsOptional()
  @IsString()
  bgColor?: string;

  @IsOptional()
  @IsString()
  image?: string;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, {
    message: 'slug must be URL-safe (letters, numbers, hyphens)',
  })
  slug?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  name?: LocalizedStringDto;

  @IsOptional()
  @IsEnum(['Biscuit', 'Flour'])
  category?: 'Biscuit' | 'Flour';

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductMediaDto)
  media?: ProductMediaDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductUiDto)
  ui?: ProductUiDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductContentDto)
  content?: ProductContentDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ColorVariationDto)
  @IsArray()
  colorVariations?: ColorVariationDto[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  relatedProducts?: string[];

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
