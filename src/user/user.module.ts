import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordEntity } from 'src/auth/passwords.entity';
import { UserController } from './user.controller';
import { UserRepo } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepo, PasswordEntity])],
    controllers: [UserController],
    providers:[UserService]
})
export class UserModule {}
