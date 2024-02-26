import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService){}

    @Get()
    testRoute(){
        return this.authService.testRoute();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('restrict')
    restrictedRoute(){
        return 'ok';
    }
    
    @UseGuards(AuthGuard('local'))
    @Post('sign-in')
    signIn(@Request() req,){
        return this.authService.login(req.user);
    }
}
