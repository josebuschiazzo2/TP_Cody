import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Req,
} from '@nestjs/common';
import { LikeDto } from './dto/like.dto';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Equal, FindOneOptions, Repository } from 'typeorm';

import { Like } from 'src/like/entities/like.entity';
@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    public likeRepository: Repository<Like>,
    @InjectRepository(Post)
    public postRepository: Repository<Post>,
    @InjectRepository(User)
    public userRepository: Repository<User>,
  ) {}

  async create(postId: number, userID: any): Promise<any> {
    const existingLike = await this.likeRepository.findOne({
      where: { postID: { id: postId }, userID: { id: userID } },
    });
  
    if (existingLike) {
      // si el like existe, lo eliminamos
      await this.remove(postId, userID);
    } else {
      // El like no existe, se crea uno nuevo
      const newLike = this.likeRepository.create({
        postID: { id: postId },
        userID: { id: userID },
      });
      await this.likeRepository.save(newLike);
      console.log('Like creado exitosamente.');
    }
  }
  
  async remove(postId: any, userID: any) {
    const like = await this.likeRepository.findOne({
      where: { postID: { id: postId }, userID: { id: userID } },
    });
  
    if (like) {
      await this.likeRepository.remove(like);
      console.log('Like eliminado exitosamente.');
    } else {
      console.log('No se encontró el like o el usuario no tiene permisos.');
    }
  }
  
  // async create(postId: number, userID: any): Promise<any> {
  //   const like = await this.likeRepository.findOne({
  //     where: { postID: { id: postId }, userID: { id: userID } },
  //   });
  //   if (!like) {
  //     const newLike = await this.likeRepository.create({
  //       postID: { id: postId },
  //       userID: { id: userID },
  //     });
  //     await this.likeRepository.save(newLike);
  //     return console.log('creado');
  //   } else {
  //     console.log('ya existe');
  //     this.remove(postId, userID);
  //   }
  // }

  // async remove(id: any, userID: any) {
  //   const like = await this.likeRepository.findOne({
  //     where: { postID: { id: id } },
  //   });
  //   if (like && userID == id) {
  //     await this.likeRepository.remove(like);
  //   } else {
  //     console.log('No se encontró el like.');
  //   }
  // }

  //query
  // const like = await this.likeRepository
  //   .createQueryBuilder('like')
  //   .where('like.postID = :postID', { postID: id })
  //   .andWhere('like.userID = :userID', { userID: userID })
  //   .getOne();

  // console.log(like);
}
