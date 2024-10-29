import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';
import {RegisterUserDTO} from './dto/register-user-dto';
import {Prisma} from '@prisma/client';
import * as argon from 'argon2';
import {Logger} from '@nestjs/common';



@Injectable()
export class AuthService {
    constructor(private config:ConfigService,private prisma:PrismaOrmService){}
    private readonly logger = new Logger();
    async register(registerUserDTO:RegisterUserDTO){
        try{
            const hashPassword = await argon.hash(registerUserDTO.password);
            const newUser = await this.prisma.user.create({
                data : {
                    name : registerUserDTO.name,
                    email : registerUserDTO.email,
                    password : hashPassword,
                    contactNumber : registerUserDTO.contactNumber,
                    location : registerUserDTO.location,
                    country : registerUserDTO.country
                }
            });

            
        }
        catch(error){
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if(error?.code === "P2002"){
                    this.logger.error('The provided email is already in use');
                }
                else if(error?.code === '/^P20\d{2}$/'){
                    this.logger.error('Database constraints failed');
                }
            }
        }
    }
} 
