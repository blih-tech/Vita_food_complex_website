import {
  Controller, Get, Post, Put, Delete,
  Param, Body, Query, UseGuards, HttpCode, HttpStatus,
  UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ApplicationsService } from './applications.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApplicationStatus } from './schemas/application.schema';

@Controller('applications')
export class ApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // Public: upload CV file and get back a URL
  @Post('upload-cv')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async uploadCv(@UploadedFile() file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadBuffer(file.buffer, {
      folder: 'vita/cvs',
      resource_type: 'auto',
    });
    return { url: result.url, publicId: result.publicId, originalName: file.originalname };
  }

  // Public: submit application
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: any) {
    return this.applicationsService.create(body);
  }

  // Admin: list all (optionally filter by jobId)
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findAll(@Query('jobId') jobId?: string) {
    return this.applicationsService.findAll(jobId);
  }

  // Admin: application counts per job
  @Get('counts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  counts() {
    return this.applicationsService.countByJob();
  }

  // Admin: update status
  @Put(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: ApplicationStatus },
  ) {
    return this.applicationsService.updateStatus(id, body.status);
  }

  // Admin: delete
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    await this.applicationsService.remove(id);
    return { message: 'Deleted' };
  }
}
