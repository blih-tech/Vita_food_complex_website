import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async findById(id: string): Promise<ProductDocument> {
    const product = await this.productModel.findOne({ id }).exec();
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async create(productData: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(productData);
    return newProduct.save();
  }

  async update(id: string, updateData: UpdateProductDto): Promise<ProductDocument> {
    const product = await this.productModel
      .findOneAndUpdate({ id }, updateData, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async delete(id: string): Promise<{ deletedCount?: number }> {
    const result = await this.productModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return result;
  }
}
