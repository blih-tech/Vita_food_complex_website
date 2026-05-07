import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

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
      const product = await this.productModel
        .findOneAndUpdate(resolveFilter(param), updateData, { new: true })
        .exec();
      if (!product) {
        throw new NotFoundException(`Product not found`);
      }
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
    const result = await this.productModel
      .deleteOne(resolveFilter(param))
      .exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Product not found`);
    }
    return result;
  }
}
