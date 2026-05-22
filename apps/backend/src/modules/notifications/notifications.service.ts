import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Notification,
  NotificationDocument,
  NotificationType,
} from './schemas/notification.schema';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification.name)
    private readonly model: Model<NotificationDocument>,
  ) {}

  async create(data: {
    type: NotificationType;
    title: string;
    body: string;
    link: string;
    resourceId?: string;
  }): Promise<NotificationDocument> {
    return new this.model(data).save();
  }

  async findAll(): Promise<NotificationDocument[]> {
    return this.model.find().sort({ createdAt: -1 }).limit(50).exec();
  }

  async getUnreadCount(): Promise<number> {
    return this.model.countDocuments({ isRead: false }).exec();
  }

  async markAsRead(id: string): Promise<NotificationDocument | null> {
    return this.model.findByIdAndUpdate(id, { isRead: true }, { new: true }).exec();
  }

  async markAllAsRead(): Promise<void> {
    await this.model.updateMany({ isRead: false }, { isRead: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
