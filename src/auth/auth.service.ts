import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordEntity } from './passwords.entity';

@Injectable()
export class AuthService {
    constructor( @InjectRepository(PasswordEntity)
    private passwordRepo: Repository<PasswordEntity>){}
}
