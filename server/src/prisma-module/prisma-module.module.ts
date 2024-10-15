import { Module } from '@nestjs/common';
import { PrismaModuleService } from './prisma-module.service';

@Module({
  providers: [PrismaModuleService]
})
export class PrismaModuleModule {}
