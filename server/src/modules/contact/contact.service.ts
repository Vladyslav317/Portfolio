import { Injectable } from '@nestjs/common';
import { MailService } from 'src/providers/mail.service';
import { SendContactMailDto } from './dtos/send-contact-mail.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailService: MailService) {}

  sendMail(data: SendContactMailDto): Promise<void> {
    return this.mailService.sendMail(data);
  }
}
