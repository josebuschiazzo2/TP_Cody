import {
  IsDate,
  IsEmail,
  IsString,
  MinLength,
} from 'class-validator';
import { Comment } from 'src/comment/entities/comment.entity';
import { Role } from 'src/common/enum/role.enum';
import { Like } from 'src/like/entities/like.entity';
import { Post } from 'src/post/entities/post.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  @MinLength(3, {
    message: 'Username is too short', 
  })
  @IsString()
  username: string;

  @Column({ nullable: false })
  @MinLength(3, {
    message: 'Nombre is too short', 
  })
  @IsString()
  nombre: string;

  @Column({ nullable: false })
  @MinLength(3, {
    message: 'Apellido is too short', 
  })
  @IsString()
  apellido: string;

  @Column({ nullable: false })
  @MinLength(3, {
    message: 'Nacionalidad is too short', 
  })
  @IsString()
  nacionalidad: string;

  @Column({ nullable: false })
  @IsDate()
  fechaNacimiento: Date;

  @Column({ unique: true, nullable: false })
  @MinLength(7, {
    message: 'Email is too short', 
  })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  @MinLength(4, {
    message: 'Password is too short', 
  })
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;
  
  //***** uno a muchos con Post ******
  @OneToMany(() => Post, (post) => post.userID)
  public post: Post[];

  // ****** uno a muchos con Comment ******
  @OneToMany(() => Comment, (comment) => comment.userID)
  public comment: Comment[];

  // ****** uno a muchos con Like ******
  @OneToMany(() => Like, (like) => like.userID)
  public like: Like[]; // array de likes. podemos acceder al array desde el front. 



  constructor(
    username: string,
    nombre: string,
    apellido: string,
    nacionalidad: string,
    fechaNacimiento: Date,
    email: string,
    password: string,
    role?: Role,
  ) {
    this.username = username;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.password = password;
    this.role = role;
  }

}
