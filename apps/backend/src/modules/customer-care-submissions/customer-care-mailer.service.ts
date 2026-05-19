import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { type Transporter } from 'nodemailer';

@Injectable()
export class CustomerCareMailerService {
  private readonly logger = new Logger(CustomerCareMailerService.name);

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

  async sendSubmissionNotification(
    kind: 'feedback' | 'complaint',
    summary: string,
    payload: Record<string, unknown>,
  ): Promise<void> {
    const transporter = this.getTransporter();
    if (!transporter) {
      this.logger.warn('SMTP credentials missing. Skipping customer care email.');
      return;
    }

    const senderEmail =
      this.configService.get<string>('MAIL_FROM') ||
      this.configService.get<string>('GMAIL_USER');
    const adminEmail =
      this.configService.get<string>('CONTACT_RECEIVER_EMAIL') ||
      this.configService.get<string>('GMAIL_USER');

    if (!senderEmail || !adminEmail) return;

    const kindLabel = kind === 'feedback' ? 'Customer Feedback' : 'Customer Complaint';

    const payloadRows = Object.entries(payload)
      .filter(([, v]) => v !== null && v !== undefined && v !== '')
      .map(([k, v]) => {
        const val = typeof v === 'object' ? JSON.stringify(v, null, 2) : String(v);
        return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;color:#555;">${k}</td><td style="padding:6px 12px;color:#333;">${val}</td></tr>`;
      })
      .join('');

    const adminHtml = `
      <h2>New ${kindLabel}</h2>
      <p><strong>Summary:</strong> ${summary}</p>
      <table style="border-collapse:collapse;width:100%;margin-top:12px;">
        <tbody>${payloadRows}</tbody>
      </table>
    `;

    try {
      await transporter.sendMail({
        from: senderEmail,
        to: adminEmail,
        subject: `New ${kindLabel} — ${summary}`,
        html: adminHtml,
      });
    } catch (error) {
      this.logger.error(
        `Failed to send customer care admin email: ${String(error)}`,
      );
    }
  }
}
