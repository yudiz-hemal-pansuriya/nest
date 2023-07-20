import { Injectable } from '@nestjs/common';

@Injectable({})
export class UserAuthService {
  signup() {
    return { status: 200, message: 'SignedUp Successfully!' };
  }
  login() {
    return { status: 200, message: 'Login Successfully!' };
  }
}
