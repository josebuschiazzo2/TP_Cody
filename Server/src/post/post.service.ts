import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    public postRepository: Repository<Post>,
  ) {}


//*****     CREATE NEW POST     ***** */
  async create(postDto: PostDto) {
    if (postDto.post !== "") { // validación ?
      const publicacion: Post = await this.postRepository.save(new Post(postDto.post));
      if (!publicacion) {
        return "Error al cargar la publicación";
      }
      return "La publicación se creó correctamente";
    } else {
      return "Publicación vacía";
    }
  }
  
//*****     READ POST     ***** */
  async findAll() {
    return await this.postRepository.find()
  }


 //*****     READ POST BY ID     ***** */
  async findById(id: number): Promise<Post> {
    try {
      const criterio: FindOneOptions = { where: { id: id } };
      let post: Post = await this.postRepository.findOne(criterio);
      if (post) return post;
      else throw new Error('No se encuentra la publicacion');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: '**** ' + error,
        },
        HttpStatus.NOT_FOUND,
      ); 
    }
  }


//*****     DELETE POST     ***** */
async remove(id: number) {
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