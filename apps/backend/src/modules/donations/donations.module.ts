import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Donation, DonationSchema } from './schemas/donation.schema';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { DonationMailerService } from './donation-mailer.service';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Donation.name, schema: DonationSchema }]),
    NotificationsModule,
  ],
  providers: [DonationsService, DonationMailerService],
  controllers: [DonationsController],
})
export class DonationsModule {}
