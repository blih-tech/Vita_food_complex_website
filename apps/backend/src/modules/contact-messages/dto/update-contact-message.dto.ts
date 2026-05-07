import { IsEnum, IsOptional } from 'class-validator';

export class UpdateContactMessageDto {
  @IsOptional()
  @IsEnum(['new', 'read', 'archived'])
  status?: 'new' | 'read' | 'archived';
}
