import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { DonationsService } from './donations.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import type { DonationStatus, DonationType } from './schemas/donation.schema';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  // Public: submit a donation request
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: any) {
    return this.donationsService.create(body);
  }

  // Admin: list all donations (optional ?type=money|inkind &status=pending|reviewed|completed)
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findAll(
    @Query('type') type?: DonationType,
    @Query('status') status?: DonationStatus,
  ) {
    return this.donationsService.findAll(type, status);
  }

  // Admin: update status
  @Put(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: DonationStatus },
  ) {
    return this.donationsService.updateStatus(id, body.status);
  }

  // Admin: delete
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    await this.donationsService.remove(id);
    return { message: 'Deleted' };
  }
}
