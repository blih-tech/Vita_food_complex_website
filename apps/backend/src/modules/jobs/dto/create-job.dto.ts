import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
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

export class CreateJobDto {
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  location: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  type: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  department: LocalizedStringDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  reportsTo?: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  summary: LocalizedStringDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocalizedStringDto)
  responsibilities?: LocalizedStringDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocalizedStringDto)
  requirements?: LocalizedStringDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocalizedStringDto)
  benefits?: LocalizedStringDto[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
