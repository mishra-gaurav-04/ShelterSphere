import {createParamDecorator,ExecutionContext} from '@nestjs/common';
import {JwtPayload} from '../../auth/types/jwt-payload-type';

export const GetCurrentUserId = createParamDecorator(
    (_ : undefined, context : ExecutionContext) : string => {
        const req = context.switchToHttp().getRequest();
        const user = req.user as JwtPayload;
        return user.sub
    }
)