import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggerFactory} from './utils/LoggerFactory';
import { globalExceptionFilter } from './utils/errors/global-exception-filter';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger : LoggerFactory('ShelterSphere')
  });
  app.setGlobalPrefix('/api/v1');
  app.use(cookieParser());
  app.useGlobalFilters(new globalExceptionFilter());
  app.enableCors({
    credentials : true,
    origin : process.env.CLIENT_URL
  })
  await app.listen(3000);
}
bootstrap();
