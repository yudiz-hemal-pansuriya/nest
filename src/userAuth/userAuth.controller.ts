import { Controller, Post } from '@nestjs/common';
import { UserAuthService } from './userAuth.service';

@Controller('user/auth')
export class UserAuthController {
  constructor(private userAuthService: UserAuthService) {}

  @Post('signup')
  signup() {
    return this.userAuthService.signup();
  }

  @Post('login')
  login() {
    return this.userAuthService.login();
  }
}
