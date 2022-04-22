import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { UserEntity } from './user.entity';
import { UserRepo } from './user.repository';

@Injectable()
export class UserService {
    
    constructor(private userReop: UserRepo){}

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
    public async createUser(user: Partial<UserEntity>):Promise<UserEntity>{
        return await this.userReop.save(user)
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
        if(newUser.password) ifuser.password = newUser.password;
        if(newUser.email) ifuser.email = newUser.email;
        if(newUser.number) ifuser.number = newUser.number;
        return await this.userReop.save(ifuser)
    }
}
