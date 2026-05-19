import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { RecipesService } from './recipes.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

type RecipePayload = CreateRecipeDto | UpdateRecipeDto;
type UploadedRecipeFile = Express.Multer.File;

@Controller('vita-recipes')
export class RecipesController {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private parsePayload<T extends RecipePayload>(rawPayload: unknown): T {
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

  private async uploadRecipeFiles<T extends RecipePayload>(
    payload: T,
    files: UploadedRecipeFile[] = [],
  ): Promise<T> {
    if (!files.length) return payload;

    const mutablePayload = payload as Record<string, unknown>;
    const media =
      (mutablePayload.media as Record<string, unknown> | undefined) ?? {};
    mutablePayload.media = media;

    for (const file of files) {
      if (file.fieldname !== 'image') continue;
      const upload = await this.cloudinaryService.uploadBuffer(file.buffer, {
        folder: 'vita/recipes',
        resource_type: 'image',
      });
      media.image = upload.url;
    }

    return payload;
  }

  @Get()
  async findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.recipesService.findBySlugOrId(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @UseInterceptors(AnyFilesInterceptor({ storage: memoryStorage() }))
  async create(
    @Body('payload') payload: string,
    @UploadedFiles() files: UploadedRecipeFile[],
  ) {
    const parsedPayload = this.parsePayload<CreateRecipeDto>(payload);
    const recipeData = await this.uploadRecipeFiles(parsedPayload, files);
    return this.recipesService.create(recipeData);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @UseInterceptors(AnyFilesInterceptor({ storage: memoryStorage() }))
  async update(
    @Param('id') id: string,
    @Body('payload') payload: string,
    @UploadedFiles() files: UploadedRecipeFile[],
  ) {
    const parsedPayload = this.parsePayload<UpdateRecipeDto>(payload);
    const updateData = await this.uploadRecipeFiles(parsedPayload, files);
    return this.recipesService.update(id, updateData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    return this.recipesService.delete(id);
  }
}
