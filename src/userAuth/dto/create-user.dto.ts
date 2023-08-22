import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserSignUpDto {
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
