import { Role } from 'src/common/enum/role.enum';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../auth/entities/auth.guard';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  //**********   New Post   **********/
  @Post('new')
  @UseGuards(AuthGuard)
  async create(@Body() PostDto: PostDto, @Req() request) {
    if (request.user.role === Role.USER || request.user.role === Role.ADMIN) {
      const username = request.user.username;
      const userID = request.user.id;
      return await this.postService.create(PostDto, userID, username);
    } else {
      return '***access unauthorized***';
    }
  }

  //*****     EDITAR POST     ***** */
  @Put('actualizar/:id')
  @UseGuards(AuthGuard)
  async actualizarPost(
    @Body() PostDto,
    @Param('id') id: number,
    @Req() request,
  ) {
    if (request.user.role === Role.USER || request.user.role === Role.ADMIN) {
      return this.postService.update(PostDto, id);
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
    if (request.user.role === Role.USER || request.user.role === Role.ADMIN) {
      return this.postService.remove(id);
    } else {
      return '***access unauthorized***';
  }
  }
}
