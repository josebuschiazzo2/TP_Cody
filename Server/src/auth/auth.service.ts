import * as bcrypt from 'bcrypt';
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
    const user = await this.userService.findOneByEmail(registerDto.email);

    if (user) {
      throw new BadRequestException('EL USUARIO YA EXISTE');
    }
    const pass_encritada = await bcrypt.hash(registerDto.password, 10);
    return await this.userService.create(
      new User(
        registerDto.username,
        registerDto.nombre,
        registerDto.apellido,
        registerDto.nacionalidad,
        registerDto.fechaNacimiento,
        registerDto.email,
        pass_encritada,
        registerDto.role,
      ),
    )}
  // generar login // generar un toke
  async login({ email, password }: LoginDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new UnauthorizedException('usuario (o contraseña) incorrecto');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('password (o usuario) incorrecto');

    // creacion de JWT
    // creamos el payload para poder conocer la info del token ej: que nivel de usuario es.
    const payload = {
      email: user.email,
      role: user.role,
      username: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return token;
  }
}