import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../modules/users/users.service';
import { ContentService } from '../modules/content/content.service';
import { ProductsService } from '../modules/products/products.service';
import { JobsService } from '../modules/jobs/jobs.service';
import { SettingsService } from '../modules/settings/settings.service';
import { ContactService } from '../modules/contact/contact.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  
  const usersService = app.get(UsersService);
  const contentService = app.get(ContentService);
  const productsService = app.get(ProductsService);
  const jobsService = app.get(JobsService);
  const settingsService = app.get(SettingsService);
  const contactService = app.get(ContactService);

  console.log('Seeding database...');

  // 1. Seed Admin User
  const adminEmail = 'admin@vitafoodcomplex.com';
  const existingAdmin = await usersService.findByEmail(adminEmail);
  if (!existingAdmin) {
    await usersService.create({
      name: 'Vita Admin',
      email: adminEmail,
      password: 'adminpassword', // In production, use hashed passwords
      role: 'admin',
    });
    console.log('Admin user created');
  }

  // 2. Seed Distributor User
  const distEmail = 'distributor@vitafoodcomplex.com';
  const existingDist = await usersService.findByEmail(distEmail);
  if (!existingDist) {
    await usersService.create({
      name: 'Test Distributor',
      email: distEmail,
      password: 'distpassword',
      role: 'distributor',
    });
    console.log('Distributor user created');
  }

  // 3. Seed Site Settings
  const settings = await settingsService.getSettings();
  if (settings.length === 0) {
    await settingsService.updateSettings({
      siteName: { en: 'Vita Food Complex', am: 'ቪታ የምግብ ኮምፕሌክስ' },
      logoUrl: { light: '/assets/brand/vita-logo.svg', dark: '/assets/brand/vita-logo-white.svg' },
      analytics: { ga4Id: 'G-XXXXXXXXXX' },
      socialLinks: {
        facebook: 'https://facebook.com/vitafood',
        instagram: 'https://instagram.com/vitafood',
        linkedin: 'https://linkedin.com/company/vitafood',
      }
    });
    console.log('Site settings created');
  }

  // 4. Seed Contact Info
  const contact = await contactService.getContact();
  if (contact.length === 0) {
    await contactService.updateContact({
      email: 'info@vitafoodcomplex.com',
      phone: ['+251 11 123 4567', '+251 11 123 4568'],
      address: {
        en: 'Addis Ababa, Ethiopia',
        am: 'አዲስ አበባ ፣ ኢትዮጵያ'
      }
    });
    console.log('Contact info created');
  }

  // 5. Seed Home Page
  try {
    await contentService.findBySlug('home');
  } catch (e) {
    await contentService.create({
      slug: 'home',
      title: { en: 'Home', am: 'መነሻ' },
      sections: [
        {
          id: 'hero',
          type: 'HeroSection',
          content: {
            en: {
              stylishWayPart1: 'The Stylish Way',
              stylishWayPart2: 'To Eat Healthy',
              description: 'We provide high-quality food products that are both nutritious and delicious.',
              cta: 'Explore Products'
            },
            am: {
              stylishWayPart1: 'ዘመናዊው መንገድ',
              stylishWayPart2: 'ጤናማ ለመመገብ',
              description: 'ጥራት ያላቸውና የተመጣጠኑ የምግብ ምርቶችን እናቀርባለን።',
              cta: 'ምርቶችን ይመልከቱ'
            }
          }
        }
      ]
    });
    console.log('Home page seeded');
  }

  console.log('Seeding completed!');
  await app.close();
}

bootstrap();
