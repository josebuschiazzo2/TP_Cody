import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}


//**********   New Post   **********/
  @Post('new-post')
  create(@Body() PostDto: PostDto) {
    return this.postService.create(PostDto);
  }
  
//**********   get posts   **********/

  @Get('get-posts')
  findAll() {
    return this.postService.findAll();
  }

  //********** Delete Post **********/
  @Delete('delete-post/:id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
