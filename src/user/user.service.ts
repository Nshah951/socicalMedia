import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { PasswordEntity } from 'src/auth/passwords.entity';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserRepo } from './user.repository';

@Injectable()
export class UserService {
    
    constructor(private userReop: UserRepo,
        @InjectRepository(PasswordEntity)
        private passwordRepo: Repository<PasswordEntity>){}

    /**
     * @description find users by Name
     * @param username 
     * @returns {Promise<UserEntity>} if user found
     */
    public async getUserbyName(username: string): Promise<UserEntity>{
        return await this.userReop.findOne({ where: {username}})
    }
    /**
     * @description Find user by id
     * @param userid 
     * @returns {Promise<UserEntity>} if user found
     */
    public async getUserbyID(userid: any): Promise<UserEntity>{
        return await this.userReop.findOne({ where: {id: userid} })
    }

    /**
     * @description Create New User
     * @returns {Promise<UserEntity>} if user created
     */
    public async createUser(user: Partial<UserEntity>,password:string):Promise<UserEntity>{
        user.userpassword = new PasswordEntity();
        user.userpassword.password = password;
        const newUser = await this.userReop.save(user);
        const UserPassword = new PasswordEntity()
        UserPassword.user = newUser;
        UserPassword.password = password;
        await this.passwordRepo.save(UserPassword)
        
        return newUser
    }

    /**
     * @description Update a User
     * @returns {Promise<UserEntity>} if user Updated
     */
    public async updateUser(userid: string,newUser: Partial<UserEntity>):Promise<UserEntity>{
        const ifuser = await this.userReop.findOne({ where: {id: userid} })
        if(!ifuser){
            return null            
        }
        if(newUser.email) ifuser.email = newUser.email;
        if(newUser.number) ifuser.number = newUser.number;
        return await this.userReop.save(ifuser)
    }
}
