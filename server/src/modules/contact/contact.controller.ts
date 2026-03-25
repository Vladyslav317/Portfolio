import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { SendContactMailDto } from './dtos/send-contact-mail.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Post('send-mail')
  async sendMail(
    @Body() data: SendContactMailDto,
  ): Promise<{ message: string }> {
    await this.contactService.sendMail(data);

    return { message: 'Email sent successfully' };
  }
}
