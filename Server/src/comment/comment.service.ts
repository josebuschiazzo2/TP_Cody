import { Injectable } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  create(commentDto: CommentDto) {
    return 'This action adds a new comment';
  }
/** Crear comentario: el comentario debe guardarse en la publicación donde el usuario hace click
 * en la parte del cliente. 
 * funcion comentar:
 * - entra el id por parámetro, si el id coincide con un id de Post debe guardarse el comentario en 
 * la publicación correspondiente. 
 * en el cliente: como parámetro pasar el id de la publicación? postID.
 * 
 */
  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, commentDto: CommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
