import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ContentModule } from './modules/content/content.module';
import { SettingsModule } from './modules/settings/settings.module';
import { ProductsModule } from './modules/products/products.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ContactModule } from './modules/contact/contact.module';
import { OrdersModule } from './modules/orders/orders.module';
import { NewsModule } from './modules/news/news.module';
import { ContactMessagesModule } from './modules/contact-messages/contact-messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI') || 'mongodb://localhost:27018/vitafood',
      }),
    }),
    AuthModule,
    UsersModule,
    ContentModule,
    SettingsModule,
    ProductsModule,
    JobsModule,
    ContactModule,
    OrdersModule,
    NewsModule,
    ContactMessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
