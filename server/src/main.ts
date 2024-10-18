import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggerFactory} from './utils/LoggerFactory';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger : LoggerFactory('ShelterSphere')
  });
  await app.listen(3000);
}
bootstrap();
