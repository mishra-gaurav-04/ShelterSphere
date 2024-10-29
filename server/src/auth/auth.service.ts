import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { PrismaOrmService } from 'src/prisma-orm/prisma-orm.service';
import {RegisterUserDTO} from './dto/register-user-dto';
import {Prisma} from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import {Logger} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { JwtPayload, Token } from './types';
import { LoginUserDTO } from './dto/login-user-dto';


@Injectable()
export class AuthService {
    constructor(private config:ConfigService,private prisma:PrismaOrmService,private jwtService:JwtService){}
    private readonly logger = new Logger();
    async register(registerUserDTO:RegisterUserDTO) : Promise<Token>{
        try{
            const hashPassword = await bcrypt.hash(registerUserDTO.password,12);
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
            const tokens = await this.getTokens(newUser.id,newUser.email);
            await this.updateHash(newUser.id,tokens.refresh_token);
            return tokens;
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

    async login(loginDto : LoginUserDTO) : Promise<Token> {
        try{
            const user = await this.prisma.user.findUnique({
                where : {
                    email : loginDto.email
                }
            })
            if(!user){
                throw new NotFoundException('User Not Found');
            }
            const isValid = await bcrypt.compare(loginDto.password,user.password);
            if(!isValid){
                throw new ForbiddenException('Email or Password is invalid');
            }
            const tokens = await this.getTokens(user.id,user.email);
            this.updateHash(user.id,tokens.refresh_token);
            return tokens;
        }
        catch(error){
            this.logger.error(error);
        }
    }

    async logout(userId : string) : Promise<Boolean> {
        await this.prisma.user.update({
            where : {
                id : userId,
                refreshTokenHash : {
                    not : null
                }
            },
            data : {
                refreshTokenHash : null
            }
        });
        return true
    }

    async updateHash(userId:string,rt:string) : Promise<void>{
        const hash = await bcrypt.hash(rt,12);
        await this.prisma.user.update({
            where : {
                id : userId
            },
            data : {
                refreshTokenHash : hash
            }
        })
    }
    
    async getTokens(userId:string,email:string) : Promise<Token>{
        const jwtPayload : JwtPayload = {
            sub : userId,
            email : email
        };

        const [access_token,refresh_token] = await Promise.all([
            this.jwtService.signAsync(jwtPayload,{
                secret : this.config.get<string>('ACCESS_TOKEN_SECRET'),
                expiresIn : this.config.get<string>('ACCESS_TOKEN_EXPIRE_TIME')
            }),
            this.jwtService.signAsync(jwtPayload,{
                secret : this.config.get<string>('REFRESH_TOKEN_SECRET'),
                expiresIn : this.config.get<string>('REFRESH_TOKEN_EXPIRE_TIME')
            })
        ]);

        return {
            access_token,
            refresh_token
        }
    }
} 
