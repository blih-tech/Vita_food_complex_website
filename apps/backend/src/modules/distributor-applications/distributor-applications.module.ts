import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistributorApplicationsController } from './distributor-applications.controller';
import { DistributorApplicationsService } from './distributor-applications.service';
import { DistributorMailerService } from './distributor-mailer.service';
import {
  DistributorApplication,
  DistributorApplicationSchema,
} from './schemas/distributor-application.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DistributorApplication.name,
        schema: DistributorApplicationSchema,
      },
    ]),
  ],
  providers: [DistributorApplicationsService, DistributorMailerService],
  controllers: [DistributorApplicationsController],
  exports: [DistributorApplicationsService],
})
export class DistributorApplicationsModule {}
