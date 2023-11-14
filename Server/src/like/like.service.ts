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
  
  //************: error boolean************:
  
//   async crear(postId: number, userID: any): Promise<any> {
// const post = await this.postRepository.findOne({where:{id:postId}});
// if (post){
//   console.log(post.id, post.post)
// }
// const like = await this.likeRepository.findOne({
//   where:{ postID:postId, userID:userID}
// })
// if (like){
//   console.log(like)
// }else{
//   console.log("no existe publicación")
// }
//   }
 


//************:error undefined************:
async crear(postId, userID){
  const post = await this.postRepository.findOne({where:{id:postId}})
if(post){
  console.log(post.id)
  const postid = post.id;
  const like = await this.likeRepository.findOne({
    where : {postID:{id:postid}, userID :{ id:userID}}
 });
 if(like){
  console.log(like)
 }
 else{
  console.log("no se encontró publicación")
 }
}
}
  //query
  // const like = await this.likeRepository
  //   .createQueryBuilder('like')
  //   .where('like.postID = :postID', { postID: id })
  //   .andWhere('like.userID = :userID', { userID: userID })
  //   .getOne();

  // console.log(like);
}
