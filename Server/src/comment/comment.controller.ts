import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { AuthGuard } from 'src/auth/entities/auth.guard';
import { Role } from 'src/common/enum/role.enum';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //**********   enviar comentario   **********/
  @Post('add/:id')
  @UseGuards(AuthGuard)
  create(
    @Param('id') id: number,
    @Body() CommentDto: CommentDto,
    @Req() request,
  ) {
    const username = request.user.username;
    const userID = request.user.id;
    return this.commentService.createComment(id, CommentDto, username, userID);
  }

  @Get('get') // esto podría estar en post pero lo hice acá
  findAll() {
    return this.commentService.findAll();
  }

  @Delete('delete-comment/:id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number, @Req() request) {
    if (request.user.role === Role.USER || request.user.role === Role.ADMIN) {
      return this.commentService.remove(id);
    } else {
      return '***access unauthorized***';
    }
  }
  
  //*****     EDITAR COMENTARIO     ***** */
  @Put('editar/:id')
  @UseGuards(AuthGuard)
  async actualizarPost(
    @Body() PostDto,
    @Param('id') id: number,
    @Req() request,
  ) {
    if (request.user.role === Role.USER || request.user.role === Role.ADMIN) {
      return this.commentService.update(PostDto, id);
    } else {
      return '***access unauthorized***';
    }
  }
}
