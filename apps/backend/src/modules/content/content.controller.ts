import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Patch,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ContentService } from './content.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { becomeDistributorDefaultPage } from './default-pages/become-distributor.default';
import { productsPageDefault } from './default-pages/products.default';
import { recipesPageDefault } from './default-pages/recipes.default';

type UpsertPageBody = {
  slug: string;
  [key: string]: unknown;
};

@Controller('content')
export class ContentController {
  constructor(
    private readonly contentService: ContentService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

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
  async upsert(@Body() pageData: UpsertPageBody) {
    return this.contentService.upsert(pageData.slug, pageData);
  }

  @Post('pages/become-distributor/initialize')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async initializeBecomeDistributorPage() {
    return this.contentService.upsert(
      becomeDistributorDefaultPage.slug,
      becomeDistributorDefaultPage,
    );
  }

  @Post('pages/recipes/initialize')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async initializeRecipesPage() {
    return this.contentService.upsert(
      recipesPageDefault.slug,
      recipesPageDefault,
    );
  }

  @Post('pages/products/initialize')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async initializeProductsPage() {
    return this.contentService.upsert(
      productsPageDefault.slug,
      productsPageDefault,
    );
  }

  @Post('upload-image')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadBuffer(file.buffer, {
      folder: 'vita/home',
      resource_type: 'image',
    });
    return { url: result.url, publicId: result.publicId };
  }

  @Delete('pages/:slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('slug') slug: string) {
    return (await this.contentService.delete(slug)) as {
      deletedCount?: number;
    };
  }
}
