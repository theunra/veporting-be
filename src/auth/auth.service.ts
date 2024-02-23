import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constant';
import { UserService } from '@/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService : JwtService,
        private userService : UserService
    ){}

    testRoute(){
        return 'auth route ok';
    }
    async signIn(auth : SignInDto){
        console.log(auth);
        const user = await this.userService.findWhereUsername(auth.username);
        
        if(!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        
        const compare_res = await bcrypt.compare(
            auth.password,
            user.pasw_hash
        );
            
        if(compare_res) {
            //logged in, create token
            const payload = {sub : user.id, username : user.username};
            return {
                access_token: await this.jwtService.signAsync(payload),
            }
        } else {
            throw new HttpException('Invalid Credential', HttpStatus.UNAUTHORIZED);
        }
    }
}
