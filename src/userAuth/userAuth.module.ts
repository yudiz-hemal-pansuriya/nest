import { Module } from '@nestjs/common';
import { UserAuthController } from './userAuth.controller';
import { UserAuthService } from './userAuth.service';

@Module({
  imports: [],
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {}
