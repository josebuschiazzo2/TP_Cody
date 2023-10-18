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

  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'userID' })
  user: User;

  // uno a muchos con Comment 
  @OneToMany(() => Comment, (comment) => comment.user)
  public comment: Comment[];

  constructor(post: string) {
    this.post = post;
  }
  public getPosts() {
    return this.post;
  }
  public setPosts(newPost) {
    this.post = newPost;
  }
}
