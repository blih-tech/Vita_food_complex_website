import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactMessagesController } from './contact-messages.controller';
import { ContactMessagesService } from './contact-messages.service';
import { ContactMailerService } from './contact-mailer.service';
import {
  ContactMessage,
  ContactMessageSchema,
} from './schemas/contact-message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContactMessage.name, schema: ContactMessageSchema },
    ]),
  ],
  providers: [ContactMessagesService, ContactMailerService],
  controllers: [ContactMessagesController],
  exports: [ContactMessagesService, ContactMailerService],
})
export class ContactMessagesModule {}
