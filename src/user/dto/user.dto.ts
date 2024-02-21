import { IsDate, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsOptional()
    name : string;

    @IsString()
    @IsOptional()
    email : string;

    @IsString()
    @IsNotEmpty()
    username : string;

    @IsString()
    @IsNotEmpty()
    password : string;
}

export class AuthUserDto {
    @IsString()
    @IsNotEmpty()
    username : string;

    @IsString()
    @IsNotEmpty()
    password : string;
}