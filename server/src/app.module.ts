import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaOrmModule } from './prisma-orm/prisma-orm.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : '.env'
  }),AuthModule, PrismaOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
