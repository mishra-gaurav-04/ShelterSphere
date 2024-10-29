import { Module,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaOrmModule } from './prisma-orm/prisma-orm.module';
import {ConfigModule} from '@nestjs/config';
import {APP_GUARD} from '@nestjs/core';
import { RequestLoggerMiddleware } from 'middleware/request-logger-middleware';
import { AccessGuard } from './utils/guards/at-gurad';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : '.env'
  }),AuthModule, PrismaOrmModule],
  controllers: [AppController],
  providers: [AppService,{
    provide : APP_GUARD,
    useClass : AccessGuard
  }],
})
export class AppModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }
}
