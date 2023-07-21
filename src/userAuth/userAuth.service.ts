import { Injectable } from '@nestjs/common';
import { User } from './userAuth.model';

@Injectable({})
export class UserAuthService {
  users: User[] = [];

  signup(id: number, sUserName: string, sEmail: string, nAge: number) {
    const newUser = new User(id, sUserName, sEmail, nAge);
    this.users.push(newUser);
    return { status: 200, message: 'SignedUp Successfully!', data: newUser };
  }

  list() {
    return { status: 200, data: this.users };
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return { status: user ? 200 : 404, data: user };
  }
}
