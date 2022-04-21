import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('post')
export class PostController {
    @Get('/')
    getAllPost(){
        return `All the posts`
    }
    @Get(':postid')
    getPostByID(@Param('postid') postid:string){
        return `Post of ${postid}`
    }
    @Post()
    userPost(@Body() Body){
        return `Posted`
    }
    @Delete(':postid')
    deletePostByID(@Param('postid') postid:string){
        return `Post Deleted ${postid}`
    }
    @Put('/:postid/like')
    likePost(@Param('postid') postid:string){
        return `Liked Post ${postid}`
    }
    @Delete('/:postid/like')
    unlikePost(@Param('postid') postid:string){
        return `Unliked post ${postid}`
    }
}
