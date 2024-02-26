import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthUserDto, CreateUserDto } from 'src/user/dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){};

    @Get('all')
    async getAllUser(){
        return await this.userService.getAllUser();
    }

    @Get(':id')
    async getUser(
        @Param('id') id: string,
    ){
        return await this.userService.getUser(id);
    }

    @Post('create')
    async createUser(@Body() user : CreateUserDto,){
        return await this.userService.createUser(user);
    }

    @Post('auth')
    async authUser(@Body() user : AuthUserDto,){
        return await this.userService.authUser(user);
    }

    @Put(':id')
    async updateUserById(
        @Param('id') id:string,
        @Body() userUpdate /*: UpdateUserDto*/,
    ){
        return await this.userService.updateUser(id, userUpdate);
    }

    @Delete(':id')
    async deleteUserById(
        @Param('id') id:string,
    ){
        return await this.userService.deleteUser(id);
    }
}
