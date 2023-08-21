import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UserAuthModule } from './userAuth/userAuth.module';
import { userAuth } from './common/middleware/userAuth.middleware';
import { UserAuthController } from './userAuth/userAuth.controller';

@Module({
  imports: [UserAuthModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(user: MiddlewareConsumer) {
    user.apply(userAuth).forRoutes(UserAuthController);
  }
}
