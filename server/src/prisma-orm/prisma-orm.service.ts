import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {ConfigService} from '@nestjs/config';


@Injectable()
export class PrismaOrmService extends PrismaClient implements OnModuleDestroy,OnModuleInit {
    constructor(private config:ConfigService){
        super(
            {
                datasources : {
                    db : {
                        url : config.get<string>('DATABASE_URL')
                    }
                }
            }
        )
    }

    async onModuleDestroy() {
        await this.$disconnect();
        
    }
    
    async onModuleInit() {
        await this.$connect();
    }
}
