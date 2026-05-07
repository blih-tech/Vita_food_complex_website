import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TermSection, TermSectionSchema } from './schemas/term-section.schema';
import { TermsService } from './terms.service';
import { TermsController } from './terms.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TermSection.name, schema: TermSectionSchema }]),
  ],
  providers: [TermsService],
  controllers: [TermsController],
})
export class TermsModule {}
