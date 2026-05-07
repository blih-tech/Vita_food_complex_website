import {
  ConflictException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

function isMongoObjectIdString(value: string): boolean {
  return (
    Types.ObjectId.isValid(value) && String(new Types.ObjectId(value)) === value
  );
}

function resolveFilter(param: string): Record<string, unknown> {
  if (isMongoObjectIdString(param)) {
    return { _id: new Types.ObjectId(param) };
  }
  return { slug: param };
}

function resolveObjectIdFilter(param: string): Record<string, unknown> {
  if (!isMongoObjectIdString(param)) {
    throw new BadRequestException('id must be a valid MongoDB ObjectId');
  }
  return { _id: new Types.ObjectId(param) };
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private collectAssetUrls(product: ProductDocument | null): string[] {
    if (!product) return [];
    const urls: string[] = [];
    if (product.media?.image) urls.push(product.media.image);
    if (product.media?.tagIcon) urls.push(product.media.tagIcon);
    for (const cert of product.content?.certifications ?? []) {
      if (cert?.image) urls.push(cert.image);
    }
    return urls;
  }

  private async deleteAssetUrls(urls: string[]): Promise<void> {
    const uniqueUrls = Array.from(new Set(urls.filter(Boolean)));
    await Promise.allSettled(
      uniqueUrls.map((url) => this.cloudinaryService.deleteByUrl(url, 'image')),
    );
  }

  private async ensureRelatedProductsExist(
    relatedProducts: string[] | undefined,
    currentProductId?: Types.ObjectId,
  ): Promise<void> {
    if (!relatedProducts || relatedProducts.length === 0) return;

    const uniqueIds = Array.from(new Set(relatedProducts));
    if (!uniqueIds.every(isMongoObjectIdString)) {
      throw new BadRequestException(
        'relatedProducts must contain valid product ids',
      );
    }

    if (
      currentProductId &&
      uniqueIds.includes(currentProductId.toHexString())
    ) {
      throw new BadRequestException('A product cannot be related to itself');
    }

    const count = await this.productModel
      .countDocuments({
        _id: { $in: uniqueIds.map((id) => new Types.ObjectId(id)) },
      })
      .exec();
    if (count !== uniqueIds.length) {
      throw new BadRequestException(
        'One or more related product ids were not found',
      );
    }
  }

  async findAll(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async findBySlugOrId(param: string): Promise<ProductDocument> {
    const product = await this.productModel
      .findOne(resolveFilter(param))
      .exec();
    if (!product) {
      throw new NotFoundException(`Product not found`);
    }
    return product;
  }

  async create(productData: CreateProductDto): Promise<ProductDocument> {
    try {
      await this.ensureRelatedProductsExist(productData.relatedProducts);
      const newProduct = new this.productModel({
        ...productData,
        available: productData.available ?? true,
      });
      return await newProduct.save();
    } catch (err: unknown) {
      const code =
        err && typeof err === 'object' && 'code' in err
          ? (err as { code?: number }).code
          : undefined;
      if (code === 11000) {
        throw new ConflictException(
          `A product with slug "${productData.slug}" already exists`,
        );
      }
      throw err;
    }
  }

  async update(
    param: string,
    updateData: UpdateProductDto,
  ): Promise<ProductDocument> {
    try {
      const idFilter = resolveObjectIdFilter(param);
      const existing = await this.productModel.findOne(idFilter).exec();
      if (!existing) {
        throw new NotFoundException(`Product not found`);
      }

      if (updateData.relatedProducts) {
        await this.ensureRelatedProductsExist(
          updateData.relatedProducts,
          existing._id,
        );
      }

      const oldUrls = this.collectAssetUrls(existing);

      const product = await this.productModel
        .findOneAndUpdate(idFilter, updateData, {
          returnDocument: 'after',
        })
        .exec();
      if (!product) throw new NotFoundException(`Product not found`);

      const newUrls = this.collectAssetUrls(product);
      const urlsToDelete = oldUrls.filter((url) => !newUrls.includes(url));
      await this.deleteAssetUrls(urlsToDelete);

      return product;
    } catch (err: unknown) {
      const code =
        err && typeof err === 'object' && 'code' in err
          ? (err as { code?: number }).code
          : undefined;
      if (code === 11000) {
        throw new ConflictException(`A product with that slug already exists`);
      }
      throw err;
    }
  }

  async delete(param: string): Promise<{ deletedCount?: number }> {
    const idFilter = resolveObjectIdFilter(param);
    const existing = await this.productModel.findOne(idFilter).exec();
    if (!existing) {
      throw new NotFoundException(`Product not found`);
    }

    const urlsToDelete = this.collectAssetUrls(existing);
    const result = await this.productModel
      .deleteOne({ _id: existing._id })
      .exec();
    await this.deleteAssetUrls(urlsToDelete);

    return result;
  }
}
