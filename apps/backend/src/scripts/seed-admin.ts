import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../modules/users/users.service';

function toBoolean(value: string | undefined, fallback = true): boolean {
  if (!value) return fallback;
  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const usersService = app.get(UsersService);

    const adminName = process.env.ADMIN_NAME ?? 'Vita Admin';
    const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@vitafoodcomplex.com';
    const adminPassword = process.env.ADMIN_PASSWORD ?? 'adminpassword';
    const resetPasswordOnExisting = toBoolean(
      process.env.ADMIN_RESET_PASSWORD,
      true,
    );

    const existingAdmin = await usersService.findByEmail(adminEmail);

    if (!existingAdmin) {
      await usersService.create({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        role: 'superadmin',
      });
      console.log(`Superadmin user created: ${adminEmail}`);
      return;
    }

    const updates: { name?: string; role?: string } = {};
    if (existingAdmin.name !== adminName) {
      updates.name = adminName;
    }
    if (existingAdmin.role !== 'superadmin') {
      updates.role = 'superadmin';
    }

    if (Object.keys(updates).length > 0) {
      await usersService.update(existingAdmin._id.toString(), updates);
    }

    if (resetPasswordOnExisting) {
      await usersService.updatePassword(adminEmail, adminPassword);
    }

    console.log(`Admin user ensured: ${adminEmail}`);
  } finally {
    await app.close();
  }
}

bootstrap().catch((error: unknown) => {
  console.error('Admin seed failed:', error);
  process.exit(1);
});
