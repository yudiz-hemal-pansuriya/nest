import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UserAuthModule } from './userAuth/userAuth.module';

@Module({
  imports: [UserAuthModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
