import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from 'src/comment/entities/comment.entity';
import { Like } from 'src/like/entities/like.entity';

@Entity({ name: 'post' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post: string;

  @Column()
  username: string;

@Column()
createdAt:string;

  @ManyToOne(() => User, (user) => user.post, { onDelete: 'CASCADE' }) // si se elimina el usuario, se eliminan las publicaciones.
  @JoinColumn({ name: 'userID' })
  userID: User;

  // uno a muchos con Comment, un post contiene un array de comentarios

  @OneToMany(() => Comment, (comment) => comment.postID)
  public comment: Comment[]; // array de comentarios. podemos acceder al array desde el front. 

// uno a muchos con Like, un post vinculado a muchos likes -array-

  @OneToMany(() => Like, (like) => like.postID)
  public like: Like[]; // array de likes. podemos acceder al array desde el front. 
   


  constructor(post: string, userID: User, username: string, createdAt:string) {
    this.post = post;
    this.userID = userID;
    this.username = username;
    this.createdAt= createdAt;
  }
  public getPosts() {
    return this.post;
  }
  public setPosts(newPost) {
    this.post = newPost;
  }
}
