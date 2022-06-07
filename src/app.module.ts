import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from './modules/router/router.module';
import {UsersModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
@Module({
  imports: [RouterModule,UsersModule,AuthModule],
  controllers: [AppController],
  providers: [AppService,AppService],
})
export class AppModule {}
