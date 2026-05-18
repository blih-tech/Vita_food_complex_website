import { IsEnum, IsOptional } from 'class-validator';

export class UpdateCustomerCareSubmissionDto {
  @IsOptional()
  @IsEnum(['new', 'read', 'archived'])
  status?: 'new' | 'read' | 'archived';
}
