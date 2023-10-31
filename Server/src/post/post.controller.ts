import { Controller, Get, Post, Body, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/post.dto';
import { AuthGuard } from '../auth/entities/auth.guard';
import { Role } from 'src/common/enum/role.enum';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  //**********   New Post   **********/

  @Post('new')
  @UseGuards(AuthGuard)
  async create(@Body() PostDto: PostDto, @Req() request) {
    if (request.user.role === Role.USER) {
      const username = request.user.username;
      const userID = request.user.id;
      return await this.postService.create(PostDto, userID, username);
    } else {
      return '***access unauthorized***';
    }
  }
  //**********   get posts   **********/
  @Get('get-posts')
 async findAll() {
    return await this.postService.findAll();
  }
  //********** Delete Post **********/
  @Delete('delete-post/:id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number, @Req() request) { 
     if (request.user.role === Role.USER) {
    return this.postService.remove(id);
  } else {
    return '***access unauthorized***';
  }
  }

// sin AuthGuard
  // @Delete('delete-post/:id')
  
  // remove(@Param('id') id: number) {
  //   return this.postService.remove(id);
  // }
}
