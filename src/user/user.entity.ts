import { Entity, Column, BeforeInsert, OneToOne, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { mediaBaseEntity } from 'src/common/base.entity';
import { PasswordEntity } from 'src/auth/passwords.entity';
import { InternalServerErrorException } from '@nestjs/common';

@Entity('users')
export class UserEntity extends mediaBaseEntity{

    @Column({nullable:false})
    username: string

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    number: number

    @Column( { name: 'follower_count', default: 0 })
    followerCount: number;

    @Column ( { name: 'followee_count', default: 0 })
    followeeCount: number;
    
    @OneToOne((type)=> PasswordEntity,(password)=>password.user,{
        lazy: true,
        cascade:true
    })
    userpassword: PasswordEntity

}
