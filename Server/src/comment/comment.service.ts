import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { Post } from 'src/post/entities/post.entity';

@Injectable()
export class CommentService {
constructor(@InjectRepository(Comment)
public commentRepository:Repository<Comment>,
@InjectRepository(Post)
public postRepository:Repository<Post>
){}


  async createComment(id:any, commentDto: CommentDto, username: string, userID) {
  const aux: FindOneOptions = { where: { id: id } };
  const postID = id;
  const publicacionAcomentar:Post = await this.postRepository.findOne(aux)
  if(!publicacionAcomentar) {
    console.log("no se encuentra publicación")
  }
  else{
   await this.commentRepository.save(
      new Comment( username,commentDto.comment, userID, postID),
    );
    return console.log ("comentario creado")
  }
  }
/** Crear comentario: el comentario debe guardarse en la publicación donde el usuario hace click
 * en la parte del cliente. 
 * 
 */
findAll() {
  return this.postRepository.find({
    relations: {
      comment: true,
      like: true
    },
    order: {
      createdAt: "DESC" // Cambié 'name' por 'createdAt' asumiendo que es el campo de fecha de creación
    }
  });
}
  


 async remove(id: number) {
    try {
      const aux: FindOneOptions = { where: { id: id } };
      const comment: Comment = await this.commentRepository.findOne(aux);
      if (!comment) throw new Error('no se encontró comentario');
      else {
        await this.commentRepository.remove(comment);
        return { id: id, message: 'se elimino correctamente' }; // -> retorna json
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: ' ' + error,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
  

  async update(commentDto: CommentDto, id: number): Promise<any> {
    try {
      const criterio: FindOneOptions = { where: { id: id } };
      let comentario: Comment = await this.commentRepository.findOne(criterio);

      if (!comentario) throw new Error('No se pudo encontrar el comentario');
      else {
        const postVieja = comentario.getComments();
        comentario.setComment(commentDto.comment);
       await this.commentRepository.save(comentario);
        return `OK -- ${postVieja} --> ${commentDto.comment}`;
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Error en PUBLICACION - ' + error,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
