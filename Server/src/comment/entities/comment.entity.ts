import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"comment"})
export class Comment {
@PrimaryGeneratedColumn()
id:number;

@Column()
newComment:string;

// created at ---> pending *******



// FK ----> user id 
@ManyToOne(() => User, (user) => user.comment)
@JoinColumn({ name: 'fk_user_id' })
user: User;

// FK ----> post id
@ManyToOne(() => Post, (post) => post.comment)
@JoinColumn({ name: 'fk_post_id' })
post: Post;
}
