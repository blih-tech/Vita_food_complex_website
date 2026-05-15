import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

type ProductPayload = CreateProductDto | UpdateProductDto;
type UploadedProductFile = Express.Multer.File;

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private parsePayload<T extends ProductPayload>(rawPayload: unknown): T {
    if (typeof rawPayload === 'string') {
      try {
        return JSON.parse(rawPayload) as T;
      } catch {
        throw new BadRequestException('Invalid JSON in payload field');
      }
    }
    if (rawPayload && typeof rawPayload === 'object') {
      return rawPayload as T;
    }
    throw new BadRequestException(
      'Missing payload field in multipart form data',
    );
  }

  private async uploadProductFiles<T extends ProductPayload>(
    payload: T,
    files: UploadedProductFile[] = [],
  ): Promise<T> {
    if (!files.length) return payload;

    const mutablePayload = payload as Record<string, unknown>;
    const media =
      (mutablePayload.media as Record<string, unknown> | undefined) ?? {};
    mutablePayload.media = media;

    for (const file of files) {
      const upload = await this.cloudinaryService.uploadBuffer(file.buffer, {
        folder: 'vita/products',
        resource_type: 'image',
      });

      if (file.fieldname === 'image') {
        media.image = upload.url;
        continue;
      }

      if (file.fieldname === 'tagIcon') {
        media.tagIcon = upload.url;
        continue;
      }

      const certMatch = file.fieldname.match(/^certificationImages\[(\d+)\]$/);
      if (certMatch) {
        const certIndex = Number(certMatch[1]);
        const content =
          (mutablePayload.content as Record<string, unknown> | undefined) ?? {};
        const certifications =
          (content.certifications as
            | Array<Record<string, unknown>>
            | undefined) ?? [];
        if (certifications[certIndex]) {
          certifications[certIndex].image = upload.url;
        }
        content.certifications = certifications;
        mutablePayload.content = content;
        continue;
      }

      const varMatch = file.fieldname.match(/^variationImages\[(\d+)\]$/);
      if (varMatch) {
        const varIndex = Number(varMatch[1]);
        const variations = (mutablePayload.colorVariations as Array<Record<string, unknown>> | undefined) ?? [];
        if (variations[varIndex]) {
          variations[varIndex].image = upload.url;
        }
        mutablePayload.colorVariations = variations;
        continue;
      }
    }

    return payload;
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findBySlugOrId(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @UseInterceptors(AnyFilesInterceptor({ storage: memoryStorage() }))
  async create(
    @Body('payload') payload: string,
    @UploadedFiles() files: UploadedProductFile[],
  ) {
    const parsedPayload = this.parsePayload<CreateProductDto>(payload);
    const productData = await this.uploadProductFiles(parsedPayload, files);
    return this.productsService.create(productData);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @UseInterceptors(AnyFilesInterceptor({ storage: memoryStorage() }))
  async update(
    @Param('id') id: string,
    @Body('payload') payload: string,
    @UploadedFiles() files: UploadedProductFile[],
  ) {
    const parsedPayload = this.parsePayload<UpdateProductDto>(payload);
    const updateData = await this.uploadProductFiles(parsedPayload, files);
    return this.productsService.update(id, updateData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
}
