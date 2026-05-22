import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerCareSubmissionsController } from './customer-care-submissions.controller';
import { CustomerCareSubmissionsService } from './customer-care-submissions.service';
import {
  CustomerCareSubmission,
  CustomerCareSubmissionSchema,
} from './schemas/customer-care-submission.schema';
import { CustomerCareMailerService } from './customer-care-mailer.service';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerCareSubmission.name, schema: CustomerCareSubmissionSchema },
    ]),
    NotificationsModule,
  ],
  controllers: [CustomerCareSubmissionsController],
  providers: [CustomerCareSubmissionsService, CustomerCareMailerService],
  exports: [CustomerCareSubmissionsService, CustomerCareMailerService],
})
export class CustomerCareSubmissionsModule {}
