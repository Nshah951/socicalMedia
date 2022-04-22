import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

export class UserCreateBody{
    @ApiProperty() username: string;
    @ApiProperty() name: string;
    @ApiProperty() password: string;
    @ApiProperty() email: string;
    @ApiPropertyOptional() number: number
}

export class UserUpdateBody{
    @ApiPropertyOptional() password: string;
    @ApiPropertyOptional() email: string;
    @ApiPropertyOptional() number: number
}

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get('/@:username')
    async getByUsername(@Param('username') username : string):Promise<any>{
        const user = await this.userService.getUserbyName(username)
    
        if(!user){
            throw new NotFoundException('User Not Found')
        }
        return user;
    }
    @Get('/:userID')
    async getbyUserID(@Param('userID') userID: string):Promise<UserEntity>{
        const user = await this.userService.getUserbyID(userID)
        if(!user){
            throw new NotFoundException('User Not Found')
        }
        return user
    }
    
    @Post('/')
    async createNewUser(@Body() userBody: UserCreateBody):Promise<UserEntity>{
        const user = await this.userService.createUser(userBody)
        return user
    }
    @Patch('/:userID')
    async updateUser(
        @Param('userID') userID: string,
        @Body() updatedata:UserUpdateBody):Promise<UserEntity>
        {
            const user = await this.userService.updateUser(userID , updatedata)
            return user
        }
    @Put('/:userID/follow')
    followUser(@Param('userID') userID: string){
        return `Follow user ${userID}`
    }
    @Delete('/:userID/follow')
    unfollowUser(@Param('userID') userID:string){
        return `UnFollow user ${userID}`
    }
    @Get('/{userid}/followers')
    getFollowersList(@Param('userID') userID:string){
        return `list of followers`
    }
    @Get('/:userID/following')
    getFollowingList(@Param('userID') userID:string){
        return `list of following`
    }
}
