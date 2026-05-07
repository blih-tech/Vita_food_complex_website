import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
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

class ProductMediaDto {
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  tagIcon?: string;
}

class ProductUiDto {
  @IsString()
  bgColor: string;

  @IsString()
  textColor: string;

  @IsString()
  nameColor: string;
}

const NUTRITION_UNITS = ['g', 'mg', 'kcal', '%'] as const;
const INGREDIENT_TYPES = ['main', 'additive', 'allergen'] as const;

class NutritionItemDto {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsEnum(NUTRITION_UNITS)
  unit: (typeof NUTRITION_UNITS)[number];

  @IsOptional()
  @IsNumber()
  dailyValue?: number;
}

class NutritionDto {
  @IsString()
  servingSize: string;

  @IsNumber()
  calories: number;

  @ValidateNested({ each: true })
  @Type(() => NutritionItemDto)
  @IsArray()
  items: NutritionItemDto[];
}

class IngredientDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(INGREDIENT_TYPES)
  type?: (typeof INGREDIENT_TYPES)[number];
}

class IngredientsDto {
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  @IsArray()
  list: IngredientDto[];

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
  @IsString()
  name: string;

  @IsString()
  image: string;
}

class ProductContentDto {
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description: LocalizedStringDto;

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

export class CreateProductDto {
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, {
    message: 'slug must be URL-safe (letters, numbers, hyphens)',
  })
  slug: string;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  name: LocalizedStringDto;

  @IsEnum(['Biscuit', 'Flour'])
  category: 'Biscuit' | 'Flour';

  @ValidateNested()
  @Type(() => ProductMediaDto)
  media: ProductMediaDto;

  @ValidateNested()
  @Type(() => ProductUiDto)
  ui: ProductUiDto;

  @ValidateNested()
  @Type(() => ProductContentDto)
  content: ProductContentDto;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relatedProducts?: string[];

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
