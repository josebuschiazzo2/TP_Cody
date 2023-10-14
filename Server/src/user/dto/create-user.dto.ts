import { Role } from 'src/common/enum/role.enum';

export class CreateUserDto {
  readonly username: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly nacionalidad: string;
  readonly fechaNacimiento: Date;
  readonly email: string;
  readonly password: string;
  readonly role?: Role;
}