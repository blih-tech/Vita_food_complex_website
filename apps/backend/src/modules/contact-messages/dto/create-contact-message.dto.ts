import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateContactMessageDto {
  @IsString()
  @MinLength(2)
  fullName: string;

  @IsString()
  @MinLength(7)
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  message: string;

  @IsBoolean()
  agreeToTerms: boolean;
}
