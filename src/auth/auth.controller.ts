import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService){}

    @Get()
    testRoute(){
        return this.authService.testRoute();
    }

    @Post('sign-in')
    signIn(@Body() auth : SignInDto,){
        return this.authService.signIn(auth);
    }
}
