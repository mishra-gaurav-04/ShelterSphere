import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggerFactory} from './utils/LoggerFactory';
import { globalExceptionFilter } from './utils/errors/global-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger : LoggerFactory('ShelterSphere')
  });
  app.useGlobalFilters(new globalExceptionFilter())
  await app.listen(3000);
}
bootstrap();
