import { Controller, Post, Body, Req, UseGuards, Param, Delete, Get } from '@nestjs/common';
import { LikeService } from './like.service';
import { AuthGuard } from 'src/auth/entities/auth.guard';
import { Role } from 'src/common/enum/role.enum';

@Controller('like')
export class LikeController {
constructor(private readonly likeService: LikeService) {}

  
  @Post(':id')
  @UseGuards(AuthGuard)
  async create(@Param('id')id:any, @Req() request ){
    if (request.user.role === Role.USER) {
      const userID = request.user.id
      return await this.likeService.create(id, userID);
    }
  }
  
  @Delete('delete/:id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id:number, @Req() request) {
    if (request.user.role === Role.USER ) {
      const userID = request.user.id 
      const postID = id;
      return this.likeService.remove( id, userID);
    } else {
      return '***access unauthorized***';
    }
  }
}
