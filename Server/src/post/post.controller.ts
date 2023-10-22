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
  create(@Body() PostDto: PostDto, @Req() request) {
    if (request.user.role === Role.USER) {
      const username = request.user.username;
      const userID = request.user.id;
      return this.postService.create(PostDto, userID, username);
    } else {
      return '***access unauthorized***';
    }
  }

  //**********   get posts   **********/
  @Get('get-posts')
  findAll() {
    return this.postService.findAll();
  }

  //********** Delete Post **********/
  @Delete('delete-post/:id')
  remove(@Param('id') id: number) {
    return this.postService.remove(id);
  }
}
