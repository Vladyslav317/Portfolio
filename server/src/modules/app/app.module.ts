import { Module } from '@nestjs/common';
import { ContactModule } from '../contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60, // 1 minute
        limit: 3,
      },
      {
        ttl: 3600, // 1 hour
        limit: 20,
      },
    ]),
    ContactModule,
  ],
})
export class AppModule {}
