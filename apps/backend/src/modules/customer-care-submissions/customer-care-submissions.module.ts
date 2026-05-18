import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerCareSubmissionsController } from './customer-care-submissions.controller';
import { CustomerCareSubmissionsService } from './customer-care-submissions.service';
import {
  CustomerCareSubmission,
  CustomerCareSubmissionSchema,
} from './schemas/customer-care-submission.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerCareSubmission.name, schema: CustomerCareSubmissionSchema },
    ]),
  ],
  controllers: [CustomerCareSubmissionsController],
  providers: [CustomerCareSubmissionsService],
  exports: [CustomerCareSubmissionsService],
})
export class CustomerCareSubmissionsModule {}
