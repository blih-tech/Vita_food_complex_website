import { Controller, Get, Post, Body, Param, Put, Patch, Delete, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('pages')
  async findAll() {
    return this.contentService.findAll();
  }

  @Get('pages/:slug')
  async findOne(@Param('slug') slug: string) {
    return this.contentService.findBySlug(slug);
  }

  @Post('pages')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async create(@Body() pageData: any) {
    return this.contentService.create(pageData);
  }

  @Put('pages/:slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async update(@Param('slug') slug: string, @Body() updateData: any) {
    return this.contentService.update(slug, updateData);
  }

  @Patch('pages/:slug/sections/:sectionId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async updateSection(
    @Param('slug') slug: string,
    @Param('sectionId') sectionId: string,
    @Body() body: { content: any },
  ) {
    return this.contentService.updateSection(slug, sectionId, body.content);
  }

  @Post('pages/upsert')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async upsert(@Body() pageData: any) {
    return this.contentService.upsert(pageData.slug, pageData);
  }

  @Delete('pages/:slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('slug') slug: string) {
    return this.contentService.delete(slug);
  }
}
