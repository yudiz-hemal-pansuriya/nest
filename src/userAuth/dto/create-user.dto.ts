import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserSignUp {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  sUserName: string;

  @IsEmail()
  @IsNotEmpty()
  sEmail: string;

  @IsNotEmpty()
  @IsNumber()
  nAge: number;
}
