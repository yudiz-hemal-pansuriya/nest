import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserSignUp } from './dto/create-user.dto';
import { UserAuthService } from './userAuth.service';

@Controller('user/auth')
export class UserAuthController {
  constructor(private userAuthService: UserAuthService) {}

  @Post('signup')
  signup(@Body() { id, sUserName, sEmail, nAge }: UserSignUp) {
    return this.userAuthService.signup(id, sUserName, sEmail, nAge);
  }

  @Get('list')
  list() {
    return this.userAuthService.list();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userAuthService.getUser(id);
  }
}
