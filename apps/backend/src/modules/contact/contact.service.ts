import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactInfo, ContactInfoDocument } from './schemas/contact.schema';

@Injectable()
export class ContactService {
  constructor(@InjectModel(ContactInfo.name) private contactModel: Model<ContactInfoDocument>) {}

  async getContact(): Promise<ContactInfoDocument[]> {
    return this.contactModel.find().exec();
  }

  async updateContact(updateData: any): Promise<ContactInfoDocument> {
    const contact = await this.contactModel.findOneAndUpdate({}, updateData, { upsert: true, new: true }).exec();
    return contact;
  }
}
