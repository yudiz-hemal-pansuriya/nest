import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UserAuthModule } from './userAuth/userAuth.module';
import { userAuth } from './common/middleware/userAuth.middleware';
import { UserAuthController } from './userAuth/userAuth.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hemal27:hemal27@cluste-1.g0tp4cn.mongodb.net/nestjs',
    ),
    UserAuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(user: MiddlewareConsumer) {
    user.apply(userAuth).forRoutes(UserAuthController);
  }
}
