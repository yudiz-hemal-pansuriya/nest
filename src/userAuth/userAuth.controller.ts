import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserSignUpDto } from './dto/create-user.dto';
import { UserAuthService } from './userAuth.service';

@Controller('user/auth')
export class UserAuthController {
  constructor(private userAuthService: UserAuthService) {}

  @Post('signup')
  signup(@Body() UserSignUp: UserSignUpDto) {
    return this.userAuthService.signup(UserSignUp);
  }

  @Get('list')
  list() {
    return this.userAuthService.list();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userAuthService.getUser(id);
  }
}
