import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';
import {RegisterUserDTO} from './dto/register-user-dto';



@Injectable()
export class AuthService {
    constructor(private config:ConfigService,private prisma:PrismaOrmService){}

    async register(registerUser:RegisterUserDTO){
        
    }
}
