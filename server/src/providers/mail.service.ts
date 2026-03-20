import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { SendContactMailDto } from 'src/modules/contact/dtos/send-contact-mail.dto';

@Injectable()
export class MailService {
  private resend: Resend;

  constructor(private readonly configService: ConfigService) {
    this.resend = new Resend(this.configService.get<string>('RESEND_API_KEY'));
  }

  async sendMail(data: SendContactMailDto): Promise<void> {
    await this.resend.emails.send({
      from: this.configService.get<string>('MAIL_FROM'),
      to: this.configService.get<string>('MAIL_TO'),
      replyTo: data.email,
      subject: `New message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
    });
  }
}
