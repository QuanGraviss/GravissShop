// create-user.dto.ts

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  Email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  Password: string;

  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsString()
  @IsNotEmpty()
  PhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  Address: string;
}
