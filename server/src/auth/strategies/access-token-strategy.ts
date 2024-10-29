import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {JwtPaload} from '../types';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(private config : ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : config.get<string>('ACCESS_TOKEN_SECRET')
        });
    }

    validate(payload : JwtPaload){
        return payload;
    }
}