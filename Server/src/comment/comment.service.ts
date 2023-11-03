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


  async createComment(id, commentDto: CommentDto, username: string, userID) {
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
      relations:{
        comment:true
      }
    })
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
  
}
