import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { UpdateContactMessageDto } from './dto/update-contact-message.dto';
import {
  ContactMessage,
  ContactMessageDocument,
} from './schemas/contact-message.schema';

@Injectable()
export class ContactMessagesService {
  constructor(
    @InjectModel(ContactMessage.name)
    private contactMessageModel: Model<ContactMessageDocument>,
  ) {}

  async create(payload: CreateContactMessageDto): Promise<ContactMessageDocument> {
    const message = new this.contactMessageModel(payload);
    return message.save();
  }

  async findAll(): Promise<ContactMessageDocument[]> {
    return this.contactMessageModel.find().sort({ createdAt: -1 }).exec();
  }

  async findById(id: string): Promise<ContactMessageDocument> {
    const message = await this.contactMessageModel.findById(id).exec();
    if (!message) {
      throw new NotFoundException(`Contact message with id ${id} not found`);
    }
    return message;
  }

  async update(id: string, payload: UpdateContactMessageDto): Promise<ContactMessageDocument> {
    const update = {
      ...payload,
      ...(payload.status === 'read' ? { readAt: new Date() } : {}),
    };
    const message = await this.contactMessageModel
      .findByIdAndUpdate(id, update, { new: true })
      .exec();
    if (!message) {
      throw new NotFoundException(`Contact message with id ${id} not found`);
    }
    return message;
  }

  async remove(id: string): Promise<{ deletedCount?: number }> {
    const result = await this.contactMessageModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Contact message with id ${id} not found`);
    }
    return result;
  }
}
