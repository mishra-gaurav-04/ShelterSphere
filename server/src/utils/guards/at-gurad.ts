import {Injectable,ExecutionContext,CanActivate} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {AuthGuard} from '@nestjs/passport';

@Injectable()
export class AccessGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(private reflector : Reflector) {
        super()
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride('isPublic',[
            context.getHandler(),
            context.getClass()
        ]);
        
        if(isPublic){
            return true
        }

        return super.canActivate(context);
    }
}