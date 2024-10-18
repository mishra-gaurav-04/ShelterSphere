import {Injectable,Logger,NestMiddleware} from '@nestjs/common';
import {Request,Response,NextFunction} from 'express';
import { getStatusMessage } from 'src/utils/statusCode-meessage';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware{
    private readonly logger = new Logger()
    use(req: Request, res: Response, next: NextFunction) {
        res.on('finish',() => {
            const statusCode : number = res?.statusCode;
            const message = getStatusMessage(statusCode)
            if(statusCode === 200 || statusCode === 201){
                this.logger.log(`[${req.method}]::${req.url}::${statusCode}::${message}`);
            }
            else if(statusCode === 400 || statusCode === 401 || statusCode === 403 || statusCode === 404 || statusCode === 405){
                this.logger.warn(`[${req.method}]::${req.url}::${statusCode}::${message}`);
            }
            else{
                this.logger.error(`[${req.method}]::${req.url}::${statusCode}::${message}`);
            }
        });
        next();
    }
}