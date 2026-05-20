import { IsIn, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateCustomerCareSubmissionDto {
  @IsIn(['feedback', 'complaint'])
  kind!: 'feedback' | 'complaint';

  @IsOptional()
  @IsString()
  @IsIn(['en', 'am'])
  locale?: string;

  @IsObject()
  payload!: Record<string, unknown>;
}
