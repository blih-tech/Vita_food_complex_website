import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistributorApplicationsController } from './distributor-applications.controller';
import { DistributorApplicationsService } from './distributor-applications.service';
import { DistributorMailerService } from './distributor-mailer.service';
import {
  DistributorApplication,
  DistributorApplicationSchema,
} from './schemas/distributor-application.schema';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DistributorApplication.name,
        schema: DistributorApplicationSchema,
      },
    ]),
    NotificationsModule,
  ],
  providers: [DistributorApplicationsService, DistributorMailerService],
  controllers: [DistributorApplicationsController],
  exports: [DistributorApplicationsService],
})
export class DistributorApplicationsModule {}
