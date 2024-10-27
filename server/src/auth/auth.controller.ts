import { Body, Controller,Post,UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/utils/joi-validation-pipe';
import {registerUserSchema} from './validation/auth-validation-schema';
import { RegisterUserDTO } from './dto/register-user-dto';

@Controller('auth')
export class AuthController {
    @Post('/sign-up')
    @UsePipes(new JoiValidationPipe(registerUserSchema))
    registerUser(@Body() registerUserDto:RegisterUserDTO){}
    
    @Post('/sign-in')
    login(){}

    @Post('/sign-out')
    logout(){}

    @Post('/refresh')
    refresh(){}

}
