import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAuthController } from './userAuth.controller';
import { UserSchema } from './userAuth.model';
import { UserAuthService } from './userAuth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {}
