import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ContactModule } from '../contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        name: 'minute',
        ttl: 60_000,
        limit: 3,
      },
      {
        name: 'hour',
        ttl: 3_600_000,
        limit: 20,
      },
    ]),
    ContactModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
