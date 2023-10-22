import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Post } from './entities/post.entity';
import { PostDto } from './dto/post.dto';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    public postRepository: Repository<Post>,
    
  ) {}
//*****     CREATE NEW POST     ***** */
async create(postDto: PostDto, userID: User, username: string) { 
  if (postDto.post !== "") {
    const publicacion: Post = await this.postRepository.save(new Post(postDto.post, userID));
    if (!publicacion) {
      return "Error al cargar la publicación";
    }
    return `La publicación se creó correctamente, usuario: ${username}`;
  } else {
    return "Publicación vacía";
  }
}

  
//*****     READ POST     ***** */
  async findAll() {
    return await this.postRepository.find()
  }


//*****     DELETE POST     ***** */
async remove(id: number):Promise<any> {
  try {
    const aux: FindOneOptions = { where: { id: id } };
    let post: Post = await this.postRepository.findOne(aux);
    if (!post) throw new Error('no se encontró publicacion');
    else {
      await this.postRepository.remove(post);
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