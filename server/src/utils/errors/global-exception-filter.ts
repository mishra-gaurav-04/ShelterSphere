import {ArgumentsHost,ExceptionFilter,HttpException,Catch,HttpStatus, Logger} from '@nestjs/common';
import {Request,Response} from 'express';

@Catch()
export class globalExceptionFilter implements ExceptionFilter{
    private readonly logger = new Logger();
    catch(exception: Error, host: ArgumentsHost) : any {
        const ctx = host.switchToHttp();
        const req : Request = ctx.getRequest();
        const res : Response = ctx.getResponse();
        const statusCode : number = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const message : string = exception instanceof HttpException ? exception.message : 'Internal Server Error';

        this.logger.error(`{[${req.method}]::${req.url}::${statusCode}::${message} \n trace ==> ${exception.stack}}`);

        res.status(statusCode).json({
            success : false,
            message : message,

        });
    }
}