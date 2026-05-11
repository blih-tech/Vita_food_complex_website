import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { type Transporter } from 'nodemailer';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';

@Injectable()
export class ContactMailerService {
  private readonly logger = new Logger(ContactMailerService.name);

  constructor(private readonly configService: ConfigService) {}

  private getTransporter(): Transporter | null {
    const user = this.configService.get<string>('GMAIL_USER');
    const pass = this.configService.get<string>('GMAIL_APP_PASSWORD');
    if (!user || !pass) {
      return null;
    }

    const host = this.configService.get<string>('SMTP_HOST');
    const port = Number(this.configService.get<string>('SMTP_PORT') || 587);
    const secure =
      this.configService.get<string>('SMTP_SECURE') === 'true' || port === 465;

    if (host) {
      return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });
    }

    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });
  }

  async sendContactEmails(payload: CreateContactMessageDto): Promise<void> {
    const transporter = this.getTransporter();
    if (!transporter) {
      this.logger.warn(
        'SMTP credentials are missing. Skipping contact email notifications.',
      );
      return;
    }

    const senderEmail = this.configService.get<string>('MAIL_FROM') || this.configService.get<string>('GMAIL_USER');
    const adminEmail =
      this.configService.get<string>('CONTACT_RECEIVER_EMAIL') ||
      this.configService.get<string>('GMAIL_USER');

    if (!senderEmail || !adminEmail) {
      this.logger.warn(
        'MAIL_FROM/CONTACT_RECEIVER_EMAIL not configured. Skipping contact email notifications.',
      );
      return;
    }

    const adminSubject = `New contact message from ${payload.fullName}`;
    const adminHtml = `
      <h2>New Contact Us Submission</h2>
      <p><strong>Full Name:</strong> ${payload.fullName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phoneNumber}</p>
      <p><strong>Agreed to Terms:</strong> ${payload.agreeToTerms ? 'Yes' : 'No'}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message}</p>
    `;

    const userSubject = 'We received your message';
    const userHtml = `
      <p>Hi ${payload.fullName},</p>
      <p>Thank you for contacting Vita Food Complex. We received your message and will get back to you shortly.</p>
      <p><strong>Your message:</strong></p>
      <p>${payload.message}</p>
      <br />
      <p>Best regards,<br/>Vita Food Complex Team</p>
    `;

    const [adminResult, userResult] = await Promise.allSettled([
      transporter.sendMail({
        from: senderEmail,
        to: adminEmail,
        replyTo: payload.email,
        subject: adminSubject,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: senderEmail,
        to: payload.email,
        subject: userSubject,
        html: userHtml,
      }),
    ]);

    if (adminResult.status === 'rejected') {
      this.logger.error(
        `Failed to send admin contact email: ${String(adminResult.reason)}`,
      );
    }
    if (userResult.status === 'rejected') {
      this.logger.error(
        `Failed to send user confirmation email: ${String(userResult.reason)}`,
      );
    }
  }
}
