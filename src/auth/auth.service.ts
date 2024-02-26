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
    async validateUser(auth : SignInDto){
        const user = await this.userService.findWhereUsername(auth.username);
        
        if(!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        
        const compare_res = await bcrypt.compare(
            auth.password,
            user.pasw_hash
        );

        if(compare_res) return user;
        else return;
    }

    async login(user : any) {
        const payload = {sub : user.id, username : user.username};
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}
