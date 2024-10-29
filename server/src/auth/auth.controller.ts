import { Body, Controller,Get,HttpCode,HttpStatus,Post,UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/utils/joi-validation-pipe';
import {loginUserSchema, registerUserSchema} from './validation/auth-validation-schema';
import { RegisterUserDTO } from './dto/register-user-dto';
import {AuthService} from './auth.service';
import { LoginUserDTO } from './dto/login-user-dto';


@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}
    @Post('/sign-up')
    @UsePipes(new JoiValidationPipe(registerUserSchema))
    @HttpCode(HttpStatus.OK)
    registerUser(@Body() registerUserDto:RegisterUserDTO){
        // TODO add cookie logic
        return this.authService.register(registerUserDto);
    }
    
    @Post('/sign-in')
    @UsePipes(new JoiValidationPipe(loginUserSchema))
    @HttpCode(HttpStatus.OK)
    login(@Body() loginUserDto:LoginUserDTO){
        // TODO add cookie logic
        return this.authService.login(loginUserDto);
    }

    @Post('/sign-out')
    logout(){}

    @Post('/refresh')
    refresh(){}

    @Get('/test')
    test(){
        return "Hello this is the test route"
    }

}
