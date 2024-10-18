import { Module } from '@nestjs/common';
import { PrismaOrmService } from './prisma-orm.service';

@Module({
  providers: [PrismaOrmService]
})
export class PrismaOrmModule {}
