import { MaxLength, MinLength } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from 'src/comment/entities/comment.entity';


@Entity({ name: 'post' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(10, {
    message: 'Title is too short', // ---- > probar en el front
  })
  @MaxLength(50, {
    message: 'Title is too long',
  })
  post: string;

  @ManyToOne(() => User, (user) => user.post, {onDelete:"CASCADE"}) // si se elimina el usuario, se eliminan las publicaciones.
  @JoinColumn({ name: 'userID' })
  userID: User;

  // uno a muchos con Comment 
  @OneToMany(() => Comment, (comment) => comment.user)
  public comment: Comment[];

  constructor(post: string, userID:User) {
    this.post = post;
    this.userID = userID;
  }
  public getPosts() {
    return this.post;
  }
  public setPosts(newPost) {
    this.post = newPost;
  }
}
