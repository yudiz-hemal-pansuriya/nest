import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './userAuth.model';
import { UserSignUpDto } from './dto/create-user.dto';

@Injectable({})
export class UserAuthService {
  constructor(@InjectModel('users') private userModel: Model<User>) {}
  users: User[] = [];

  async signup(UserSignUp: UserSignUpDto) {
    const newUser = await this.userModel.create(UserSignUp);
    return { status: 200, message: 'SignedUp Successfully!', data: newUser };
  }

  async list() {
    const users = await this.userModel.find({});
    return { status: 200, data: users };
  }

  async getUser(id: string) {
    const user = await this.userModel.findById(id);
    return { status: user ? 200 : 404, data: user };
  }
}
