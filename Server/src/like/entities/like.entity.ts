import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'like' })
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.like, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postID' })
  postID: Post;

  @ManyToOne(() => User, (user) => user.like)
  @JoinColumn({ name: 'userID' })
  userID: User;

  constructor(postID: Post, userID: User) {
    this.postID = postID;
    this.userID = userID;
  }
}
