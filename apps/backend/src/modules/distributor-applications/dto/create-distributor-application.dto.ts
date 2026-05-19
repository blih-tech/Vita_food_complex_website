import {
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateDistributorApplicationDto {
  @IsString()
  @MinLength(2)
  businessName: string;

  @IsString()
  @MinLength(2)
  businessType: string;

  @IsString()
  @MinLength(2)
  businessId: string;

  @IsString()
  @MinLength(2)
  contactPerson: string;

  @IsString()
  @MinLength(7)
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  warehouseAddress: string;

  @IsString()
  @MinLength(2)
  city: string;

  @IsString()
  @MinLength(3)
  fullAddress: string;

  @IsOptional()
  @IsString()
  additionalNote?: string;

  @IsArray()
  @IsString({ each: true })
  productInterests: string[];
}
