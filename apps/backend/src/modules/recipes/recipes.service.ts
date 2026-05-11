import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

function isMongoObjectIdString(value: string): boolean {
  return (
    Types.ObjectId.isValid(value) && String(new Types.ObjectId(value)) === value
  );
}

function resolveObjectIdFilter(param: string): Record<string, unknown> {
  if (!isMongoObjectIdString(param)) {
    throw new BadRequestException('id must be a valid MongoDB ObjectId');
  }
  return { _id: new Types.ObjectId(param) };
}

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private collectImageUrl(recipe: RecipeDocument | null): string[] {
    if (!recipe?.media?.image) return [];
    return [recipe.media.image];
  }

  private async deleteAssetUrls(urls: string[]): Promise<void> {
    const uniqueUrls = Array.from(new Set(urls.filter(Boolean)));
    await Promise.allSettled(
      uniqueUrls.map((url) => this.cloudinaryService.deleteByUrl(url, 'image')),
    );
  }

  async findAll(): Promise<RecipeDocument[]> {
    return this.recipeModel
      .find()
      .sort({ sortOrder: 1, createdAt: 1 })
      .exec();
  }

  async findBySlugOrId(param: string): Promise<RecipeDocument> {
    const filter = isMongoObjectIdString(param)
      ? { _id: new Types.ObjectId(param) }
      : { slug: param };
    const recipe = await this.recipeModel.findOne(filter).exec();
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return recipe;
  }

  async create(recipeData: CreateRecipeDto): Promise<RecipeDocument> {
    try {
      const newRecipe = new this.recipeModel({
        ...recipeData,
        sortOrder: recipeData.sortOrder ?? 0,
        published: recipeData.published ?? true,
      });
      return await newRecipe.save();
    } catch (err: unknown) {
      const code =
        err && typeof err === 'object' && 'code' in err
          ? (err as { code?: number }).code
          : undefined;
      if (code === 11000) {
        throw new ConflictException(
          `A recipe with slug "${recipeData.slug}" already exists`,
        );
      }
      throw err;
    }
  }

  async update(
    param: string,
    updateData: UpdateRecipeDto,
  ): Promise<RecipeDocument> {
    try {
      const idFilter = resolveObjectIdFilter(param);
      const existing = await this.recipeModel.findOne(idFilter).exec();
      if (!existing) {
        throw new NotFoundException('Recipe not found');
      }

      const oldUrls = this.collectImageUrl(existing);

      const recipe = await this.recipeModel
        .findOneAndUpdate(idFilter, updateData, {
          returnDocument: 'after',
        })
        .exec();
      if (!recipe) throw new NotFoundException('Recipe not found');

      const newUrls = this.collectImageUrl(recipe);
      const urlsToDelete = oldUrls.filter((url) => !newUrls.includes(url));
      await this.deleteAssetUrls(urlsToDelete);

      return recipe;
    } catch (err: unknown) {
      const code =
        err && typeof err === 'object' && 'code' in err
          ? (err as { code?: number }).code
          : undefined;
      if (code === 11000) {
        throw new ConflictException('A recipe with that slug already exists');
      }
      throw err;
    }
  }

  async delete(param: string): Promise<{ deletedCount?: number }> {
    const idFilter = resolveObjectIdFilter(param);
    const existing = await this.recipeModel.findOne(idFilter).exec();
    if (!existing) {
      throw new NotFoundException('Recipe not found');
    }

    const urlsToDelete = this.collectImageUrl(existing);
    const result = await this.recipeModel.deleteOne({ _id: existing._id }).exec();
    await this.deleteAssetUrls(urlsToDelete);

    return result;
  }
}
