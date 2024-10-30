import { Body, Controller,Get,HttpCode,HttpStatus,Post,UseGuards,UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/utils/joi-validation-pipe';
import {loginUserSchema, registerUserSchema} from './validation/auth-validation-schema';
import { RegisterUserDTO } from './dto/register-user-dto';
import {AuthService} from './auth.service';
import { LoginUserDTO } from './dto/login-user-dto';
import { Pubic } from 'src/utils/decorators/Public-Decorator';
import { AccessGuard } from 'src/utils/guards/at-gurad';
import { RefreshGuard } from 'src/utils/guards/rt-gurad';


@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}
    
    @Pubic()
    @Post('/sign-up')
    @UsePipes(new JoiValidationPipe(registerUserSchema))
    @HttpCode(HttpStatus.OK)
    registerUser(@Body() registerUserDto:RegisterUserDTO){
        // TODO add cookie logic
        return this.authService.register(registerUserDto);
    }

    @Pubic()
    @Post('/sign-in')
    @UsePipes(new JoiValidationPipe(loginUserSchema))
    @HttpCode(HttpStatus.OK)
    login(@Body() loginUserDto:LoginUserDTO){
        // TODO add cookie logic
        return this.authService.login(loginUserDto);
    }

    @Post('/sign-out')
    @UseGuards(AccessGuard)
    logout(){}

    @Post('/refresh')
    @UseGuards(RefreshGuard)
    refresh(){}

    @Get('/test')
    @UseGuards(AccessGuard)
    test(){
        return "Hello this is the test route"
    }

    @Pubic()
    @Get('/greet')
    greet(){
        return "hi hello and in between"
    }

}
