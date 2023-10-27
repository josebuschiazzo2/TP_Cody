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

@Entity({ name: 'post' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post: string;

  @Column()
  username: string;

  @ManyToOne(() => User, (user) => user.post, { onDelete: 'CASCADE' }) // si se elimina el usuario, se eliminan las publicaciones.
  @JoinColumn({ name: 'userID' })
  userID: User;

  // uno a muchos con Comment

  @OneToMany(() => Comment, (comment) => comment.user)
  public comment: Comment[]; // null if no children ?

  constructor(post: string, userID: User, username: string) {
    this.post = post;
    this.userID = userID;
    this.username = username;
  }
  public getPosts() {
    return this.post;
  }
  public setPosts(newPost) {
    this.post = newPost;
  }
}
