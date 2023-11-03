import { IsEmail } from 'class-validator';
import { Role } from 'src/common/enum/role.enum';
import { Post } from 'src/post/entities/post.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Column, Entity,OneToMany,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  apellido: string;

  @Column({ nullable: false })
  nacionalidad: string;

  @Column({ nullable: false })
  fechaNacimiento: Date;

  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;
  
  //***** uno a muchos con Post ******
  @OneToMany(() => Post, (post) => post.userID)
  public post: Post[];

  // ****** uno a muchos con Comment ******
  @OneToMany(() => Comment, comment => comment.userID)
  public comment: Comment[];


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
