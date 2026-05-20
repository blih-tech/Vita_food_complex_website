import { IsIn, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateCustomerCareSubmissionDto {
  @IsIn(['feedback', 'complaint', 'compliment'])
  kind!: 'feedback' | 'complaint' | 'compliment';

  @IsOptional()
  @IsString()
  @IsIn(['en', 'am'])
  locale?: string;

  @IsObject()
  payload!: Record<string, unknown>;
}
