import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FAQ, FAQSchema } from './schemas/faq.schema';
import { FAQsService } from './faqs.service';
import { FAQsController } from './faqs.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FAQ.name, schema: FAQSchema }]),
  ],
  providers: [FAQsService],
  controllers: [FAQsController],
})
export class FAQsModule {}
