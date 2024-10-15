import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ListingsModule } from './listings/listings.module';
import { PrismaModuleModule } from './prisma-module/prisma-module.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [AuthModule, ListingsModule, PrismaModuleModule,ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : '.env'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
