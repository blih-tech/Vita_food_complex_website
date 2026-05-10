import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ProductsModule } from '../products/products.module';
import { JobsModule } from '../jobs/jobs.module';
import { ContactMessagesModule } from '../contact-messages/contact-messages.module';

@Module({
  imports: [
    ProductsModule,
    JobsModule,
    ContactMessagesModule,
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
