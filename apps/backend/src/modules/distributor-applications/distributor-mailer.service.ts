import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { type Transporter } from 'nodemailer';
import { CreateDistributorApplicationDto } from './dto/create-distributor-application.dto';

@Injectable()
export class DistributorMailerService {
  private readonly logger = new Logger(DistributorMailerService.name);

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

  async sendDistributorEmails(
    payload: CreateDistributorApplicationDto,
  ): Promise<void> {
    const transporter = this.getTransporter();
    if (!transporter) {
      this.logger.warn(
        'SMTP credentials are missing. Skipping distributor application email notifications.',
      );
      return;
    }

    const senderEmail =
      this.configService.get<string>('MAIL_FROM') ||
      this.configService.get<string>('GMAIL_USER');
    const adminEmail =
      this.configService.get<string>('CONTACT_RECEIVER_EMAIL') ||
      this.configService.get<string>('GMAIL_USER');

    if (!senderEmail || !adminEmail) {
      this.logger.warn(
        'MAIL_FROM/CONTACT_RECEIVER_EMAIL not configured. Skipping distributor email notifications.',
      );
      return;
    }

    const productsHtml = payload.productInterests.length
      ? payload.productInterests
          .map((p) => `<li>${p}</li>`)
          .join('')
      : '<li>None selected</li>';

    const adminSubject = `New Distributor Application — ${payload.businessName}`;
    const adminHtml = `
      <h2>New Distributor Application</h2>
      <h3>Business Information</h3>
      <p><strong>Business Name:</strong> ${payload.businessName}</p>
      <p><strong>Business Type:</strong> ${payload.businessType}</p>
      <p><strong>Business ID:</strong> ${payload.businessId}</p>
      <p><strong>Contact Person:</strong> ${payload.contactPerson}</p>
      <p><strong>Phone:</strong> ${payload.phoneNumber}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <h3>Location Details</h3>
      <p><strong>Warehouse Address:</strong> ${payload.warehouseAddress}</p>
      <p><strong>City:</strong> ${payload.city}</p>
      <p><strong>Full Address:</strong> ${payload.fullAddress}</p>
      ${payload.additionalNote ? `<p><strong>Additional Note:</strong> ${payload.additionalNote}</p>` : ''}
      <h3>Products of Interest</h3>
      <ul>${productsHtml}</ul>
    `;

    const userSubject =
      'Vita Food Complex — Distributor Application Received';
    const userHtml = `
      <p>Dear ${payload.contactPerson},</p>
      <p>Thank you for applying to become a distributor for <strong>Vita Food Complex</strong>.</p>
      <p>We have received your application for <strong>${payload.businessName}</strong> and our team will review it shortly. We will contact you at <strong>${payload.phoneNumber}</strong> or <strong>${payload.email}</strong> once we have an update.</p>
      <p><strong>Application Summary:</strong></p>
      <ul>
        <li><strong>Business:</strong> ${payload.businessName} (${payload.businessType})</li>
        <li><strong>Location:</strong> ${payload.city}</li>
        <li><strong>Products:</strong> ${payload.productInterests.join(', ') || 'N/A'}</li>
      </ul>
      <br />
      <p>Best regards,<br/>Vita Food Complex Distribution Team</p>
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
        `Failed to send admin distributor email: ${String(adminResult.reason)}`,
      );
    }
    if (userResult.status === 'rejected') {
      this.logger.error(
        `Failed to send distributor confirmation email: ${String(userResult.reason)}`,
      );
    }
  }
}
