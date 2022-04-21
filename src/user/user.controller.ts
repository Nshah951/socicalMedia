import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('/@:username')
    getByUsername(@Param('username') username : string):string{
        return `Get user by username ${username}`
    }
    @Get(':userID')
    getbyUserID(@Param('userID') userID: string){
        return `Get user by ID ${userID}`
    }
    @Post('/')
    createNewUser(@Body() user: string){
        return `username created ${user}`
    }
    @Patch('/:userID')
    updateUser(@Param('userID') userID: string,@Body() updatedata:string){
        return `Update at ${userID} of ${updatedata}`
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
