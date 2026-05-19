import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateDistributorApplicationDto {
  @IsOptional()
  @IsEnum(['pending', 'reviewing', 'approved', 'rejected'])
  status?: 'pending' | 'reviewing' | 'approved' | 'rejected';

  @IsOptional()
  @IsString()
  adminNote?: string;
}
