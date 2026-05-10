import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { JobsService } from '../jobs/jobs.service';
import { ContactMessagesService } from '../contact-messages/contact-messages.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly jobsService: JobsService,
    private readonly contactMessagesService: ContactMessagesService,
  ) {}

  async getStats() {
    const [totalProducts, jobOpenings, unreadMessages] = await Promise.all([
      this.productsService.count(),
      this.jobsService.count(),
      this.contactMessagesService.countUnread(),
    ]);

    return {
      totalProducts,
      jobOpenings,
      unreadMessages,
      siteVisits: 1240, // Mocked for now as we don't have analytics tracking yet
    };
  }
}
