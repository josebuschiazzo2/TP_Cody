import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from 'src/common/enum/role.enum';
import { Column } from 'typeorm';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  apellido: string;

  @Column({ nullable: false })
  nacionalidad: string;

  @Column({ nullable: false })
  fechaNacimiento: Date;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  readonly role: Role;
}
