import {
  Controller, Get, Post, Put, Delete,
  Param, Body, UseGuards, HttpCode, HttpStatus,
} from '@nestjs/common';
import { FAQsService } from './faqs.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('faqs')
export class FAQsController {
  constructor(private readonly faqsService: FAQsService) {}

  // Public: published FAQs sorted by position
  @Get()
  findPublished() {
    return this.faqsService.findPublished();
  }

  // Admin: all FAQs
  @Get('admin/all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findAll() {
    return this.faqsService.findAll();
  }

  // Admin: create
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  create(@Body() body: any) {
    return this.faqsService.create(body);
  }

  // Admin: bulk-update positions (drag-and-drop reorder)
  @Put('positions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  updatePositions(@Body() body: { updates: { id: string; position: number }[] }) {
    return this.faqsService.updatePositions(body.updates);
  }

  // Admin: update single FAQ
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  update(@Param('id') id: string, @Body() body: any) {
    return this.faqsService.update(id, body);
  }

  // Admin: delete
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    await this.faqsService.remove(id);
    return { message: 'Deleted' };
  }
}
