import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { PostEntity } from './post/post.entity';

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
      entities:[ UserEntity, PostEntity ]
    })
  ],
  controllers: [AppController, UserController, PostController],
  providers: [AppService],
})
export class AppModule {}
