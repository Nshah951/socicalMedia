import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { PostEntity } from './post/post.entity';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { PasswordEntity } from './auth/passwords.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:'nishant',
      password:'postgres',
      database:'socialmedia',
      synchronize: true,
      logger:'advanced-console',
      logging:'all',
      entities:[ UserEntity, PostEntity, PasswordEntity]
    }),
    UserModule,
    PostModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
