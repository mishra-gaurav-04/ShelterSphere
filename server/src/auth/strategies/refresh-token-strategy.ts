import {Injectable,ForbiddenException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {ConfigService} from '@nestjs/config';
import {Request} from 'express';
import {JwtPayload,JwtPayloadWithRt} from '../types';


@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy,'jwt-refresh'){
    constructor(private config : ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('REFRESH_TOKEN_SECRET'),
            passReqToCallback: true,
        })
    }

    validate(req:Request,payload : JwtPayload) : JwtPayloadWithRt {
        const refreshToken = req?.get('authorization')?.replace('Bearer','').trim()
        if(!refreshToken){
            throw new ForbiddenException('Refresh Token Not Found');
        }
        return {
            ...payload,
            refreshToken
        }
    }

}