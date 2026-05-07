import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
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

class ProductMediaDto {
  @IsString()
  image: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  gallery?: string[];
}

class ProductUiDto {
  @IsString()
  bgColor: string;

  @IsString()
  textColor: string;

  @IsString()
  nameColor: string;
}

class ProductContentDto {
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description: LocalizedStringDto;
}

export class CreateProductDto {
  @IsString()
  id: string;

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
  @IsBoolean()
  available?: boolean;
}
