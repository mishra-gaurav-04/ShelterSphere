import { Body, Controller,Get,Post,UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/utils/joi-validation-pipe';
import {registerUserSchema} from './validation/auth-validation-schema';
import { RegisterUserDTO } from './dto/register-user-dto';
import {AuthService} from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}
    @Post('/sign-up')
    @UsePipes(new JoiValidationPipe(registerUserSchema))
    registerUser(@Body() registerUserDto:RegisterUserDTO){
        // TODO add cookie logic
        return this.authService.register(registerUserDto);
    }
    
    @Post('/sign-in')
    login(){
        // TODO add cookie logic
        
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
