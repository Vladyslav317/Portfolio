import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverlessExpress from '@vendia/serverless-express';

const expressApp = express();
let cachedHandler: ReturnType<typeof serverlessExpress>;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'https://portfolio-five-mu-bhmnyupuju.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();

  cachedHandler = serverlessExpress({ app: expressApp });
}

bootstrap();

export const handler = async (req: any, res: any) => {
  if (!cachedHandler) {
    await bootstrap();
  }

  return cachedHandler(req, res);
};
