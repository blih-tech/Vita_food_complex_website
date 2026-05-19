import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { type Transporter } from 'nodemailer';
import type { DonationType } from './schemas/donation.schema';

@Injectable()
export class DonationMailerService {
  private readonly logger = new Logger(DonationMailerService.name);

  constructor(private readonly configService: ConfigService) {}

  private getTransporter(): Transporter | null {
    const user = this.configService.get<string>('GMAIL_USER');
    const pass = this.configService.get<string>('GMAIL_APP_PASSWORD');
    if (!user || !pass) return null;

    const host = this.configService.get<string>('SMTP_HOST');
    const port = Number(this.configService.get<string>('SMTP_PORT') || 587);
    const secure =
      this.configService.get<string>('SMTP_SECURE') === 'true' || port === 465;

    if (host) {
      return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    }
    return nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
  }

  async sendDonationEmails(data: {
    fullName: string;
    email: string;
    phone: string;
    type: DonationType;
    amount?: string;
    items?: string[];
    message?: string;
  }): Promise<void> {
    const transporter = this.getTransporter();
    if (!transporter) {
      this.logger.warn('SMTP credentials missing. Skipping donation emails.');
      return;
    }

    const senderEmail =
      this.configService.get<string>('MAIL_FROM') ||
      this.configService.get<string>('GMAIL_USER');
    const adminEmail =
      this.configService.get<string>('CONTACT_RECEIVER_EMAIL') ||
      this.configService.get<string>('GMAIL_USER');

    if (!senderEmail || !adminEmail) return;

    const typeLabel = data.type === 'money' ? 'Monetary Donation' : 'In-Kind Donation';
    const detailHtml =
      data.type === 'money'
        ? `<p><strong>Amount:</strong> ${data.amount ?? 'Not specified'}</p>`
        : `<p><strong>Items:</strong> ${data.items?.join(', ') ?? 'Not specified'}</p>`;

    const adminSubject = `New ${typeLabel} — ${data.fullName}`;
    const adminHtml = `
      <h2>New ${typeLabel}</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${detailHtml}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
    `;

    const userSubject = 'Vita Food Complex — Thank You for Your Generosity';
    const userHtml = `
      <p>Dear ${data.fullName},</p>
      <p>Thank you for your generous ${data.type === 'money' ? 'monetary' : 'in-kind'} donation to <strong>Vita Food Complex</strong> and our community initiatives.</p>
      <p>Your contribution makes a real difference. Our team will be in touch regarding next steps.</p>
      <br />
      <p>With gratitude,<br/>Vita Food Complex Team</p>
    `;

    const [adminResult, userResult] = await Promise.allSettled([
      transporter.sendMail({
        from: senderEmail,
        to: adminEmail,
        replyTo: data.email,
        subject: adminSubject,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: senderEmail,
        to: data.email,
        subject: userSubject,
        html: userHtml,
      }),
    ]);

    if (adminResult.status === 'rejected') {
      this.logger.error(`Failed to send admin donation email: ${String(adminResult.reason)}`);
    }
    if (userResult.status === 'rejected') {
      this.logger.error(`Failed to send donor confirmation: ${String(userResult.reason)}`);
    }
  }
}
