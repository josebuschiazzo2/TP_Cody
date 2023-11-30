import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const user = await this.userService.findOneByEmail(registerDto.email);
      if (user) {
        throw new BadRequestException('EL USUARIO YA EXISTE');
      }
  
      const pass_encritada = await bcrypt.hash(registerDto.password, 10);
  
      const nuevoUsuario = new User(
        registerDto.username,
        registerDto.nombre,
        registerDto.apellido,
        registerDto.nacionalidad,
        new Date(registerDto.fechaNacimiento),
        registerDto.email,
        pass_encritada,
        registerDto.role,
      );
  
      const validationError = await this.validateUser(nuevoUsuario); // Espera la validación aquí
      if (validationError) {
        return validationError;
      }
      const createdUser = await this.userService.create(nuevoUsuario);
  
      return 'Registro exitoso';
  
    } catch (error) {
      // Maneja cualquier error de validación u otras excepciones aquí
      console.error(error);
      throw new BadRequestException('Error de validación o registro');
    }
  }
  
      
  // generar login // generar un toke
  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user)
      throw new UnauthorizedException('usuario (o contraseña) incorrecto');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('password (o usuario) incorrecto');

    // creacion de JWT
    // creamos el payload para poder conocer la info del token ej: que nivel de usuario es.
    const payload = {
      username: user.username,
      email: user.email,
      role: user.role,
      id: user.id, // necesito el id para vincular las tablas post y user ----> asi se vincula el id del usuario con el post
    };
    const username = payload.username;
    const id = payload.id;
    const role = payload.role;
    const token = await this.jwtService.signAsync(payload);
    return { token, username: username, id: id, role: role };
  }
  // en el front tenemos que guardar el token en local storage
  //vamos a usar el token como parte de la solicitud

 

  // NUEVO CODIGO DE VERIFICACION
  // mostrará detalles específicos sobre cada error de validación, 
  // incluyendo la propiedad y las restricciones asociadas.

  async validateUser(user) {
    try {
      const errors = await validate(user);
      if (errors.length > 0) {
        console.error('Validation failed:', errors);
        const errorMessage = errors
          .map((error) => {
            // Para obtener información detallada sobre cada error de validación
            return `${error.property} - ${Object.values(error.constraints).join(', ')}`;
          })
          .join('\n');
        return `Error de validación: ${errorMessage}`;
      }
      return null;
    } catch (error) {
      console.error('Error during validation:', error);
      return 'Error de validación';
    }
  }
  


  
}
