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

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  id?: string;

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
  @IsBoolean()
  available?: boolean;
}
