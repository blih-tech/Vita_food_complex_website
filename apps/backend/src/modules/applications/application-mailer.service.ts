import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { type Transporter } from 'nodemailer';

@Injectable()
export class ApplicationMailerService {
  private readonly logger = new Logger(ApplicationMailerService.name);

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

  async sendApplicationEmails(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobId: string;
  }): Promise<void> {
    const transporter = this.getTransporter();
    if (!transporter) {
      this.logger.warn('SMTP credentials missing. Skipping job application emails.');
      return;
    }

    const senderEmail =
      this.configService.get<string>('MAIL_FROM') ||
      this.configService.get<string>('GMAIL_USER');
    const adminEmail =
      this.configService.get<string>('CONTACT_RECEIVER_EMAIL') ||
      this.configService.get<string>('GMAIL_USER');

    if (!senderEmail || !adminEmail) return;

    const fullName = `${data.firstName} ${data.lastName}`;

    const adminSubject = `New Job Application — ${fullName}`;
    const adminHtml = `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Job ID:</strong> ${data.jobId}</p>
      <p>Log in to the admin dashboard to review the full application and CV.</p>
    `;

    const userSubject = 'Vita Food Complex — Application Received';
    const userHtml = `
      <p>Dear ${fullName},</p>
      <p>Thank you for applying at <strong>Vita Food Complex</strong>. We have received your application and will review it carefully.</p>
      <p>Our HR team will reach out to you if your profile matches our requirements.</p>
      <br />
      <p>Best regards,<br/>Vita Food Complex HR Team</p>
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
      this.logger.error(`Failed to send admin application email: ${String(adminResult.reason)}`);
    }
    if (userResult.status === 'rejected') {
      this.logger.error(`Failed to send applicant confirmation: ${String(userResult.reason)}`);
    }
  }
}
