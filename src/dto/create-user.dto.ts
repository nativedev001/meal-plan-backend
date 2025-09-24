import {IsEmail, IsNotEmpty, MinLength, MaxLength, IsOptional} from 'class-validator'

export class CreateUserDto{
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @MinLength(6)
    password:string;

    @IsOptional()
    dietaryRestrictions?:string[];
}