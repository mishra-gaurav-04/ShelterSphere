import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaModuleService extends PrismaClient implements OnModuleDestroy,OnModuleInit{
    
}