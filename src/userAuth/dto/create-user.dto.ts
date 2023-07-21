import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserSignUp {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  sUserName: string;

  @IsEmail()
  @IsNotEmpty()
  sEmail: string;

  @IsNotEmpty()
  nAge: number;
}
