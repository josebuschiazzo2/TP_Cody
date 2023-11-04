import { User } from 'src/user/entities/user.entity';
import {
  FindOneOptions,
  Repository,
} from 'typeorm';

import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PostDto } from './dto/post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    public postRepository: Repository<Post>,
  ) {}
  //*****     CREATE NEW POST     ***** */
  async create(postDto: PostDto, userID: User, username: string) {
    const meses  = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fecha = new Date();
const createdAt = (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
    if (postDto.post !== '') {
      const publicacion: Post = await this.postRepository.save(
        new Post(postDto.post, userID, username, createdAt),
      );
      if (!publicacion) {
        return 'Error al cargar la publicación';
      }
      return console.log(`La publicación se creó correctamente, usuario: ${username}`);
    } else {
      return console.log('Publicación vacía');
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
