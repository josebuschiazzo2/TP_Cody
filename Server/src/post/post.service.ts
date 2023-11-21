import { User } from 'src/user/entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PostDto } from './dto/post.dto';
import { Post } from './entities/post.entity';
import { validate } from 'class-validator';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    public postRepository: Repository<Post>,
  ) {}
  //*****     CREATE NEW POST     ***** */
  async create(postDto: PostDto, userID: User, username: string) {
    const meses = ['enero', 'febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const fecha = new Date();
    const createdAt = fecha.getDate() + ' de ' + meses[fecha.getMonth()] +' de ' + fecha.getUTCFullYear();
    if (postDto.post !== '') {
      const publicacion = await this.postRepository.create(
        new Post(postDto.post, userID, username, createdAt),
      );
      await this.validatePost(publicacion);
      const publicacionGuardada: Post = await this.postRepository.save(publicacion);
      if (!publicacionGuardada) {
        return 'Error al cargar la publicación';
      }
      return console.log(
        `La publicación se creó correctamente, usuario: ${username}`,
      );
    } else {
      return console.log('Publicación vacía');
    }
  }
  async validatePost(post: Post): Promise<void> {
    const errors = await validate(post);
    if (errors.length > 0) {
      throw new BadRequestException({ message: 'Validation failed', errors });
    }
  }
  //*****     READ POST     ***** */
  async findAll() {
    return await this.postRepository.find();
  }

  //*****     DELETE POST     ***** */
  async remove(id: number): Promise<any> {
    try {
      const aux: FindOneOptions = { where: { id: id } };
      const post: Post = await this.postRepository.findOne(aux);
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
