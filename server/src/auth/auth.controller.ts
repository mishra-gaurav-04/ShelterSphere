import { Controller,Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('/sign-up')
    registerUser(){}
    
    @Post('/sign-in')
    login(){}

    @Post('/sign-out')
    logout(){}

    @Post('/refresh')
    refresh(){}

}
