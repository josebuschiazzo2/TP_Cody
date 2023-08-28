import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Post()
  login(@Body() body) {
    const { nombre, password } = body;

    if (!nombre || !password) {
      return { error: 'Todos los campos son obligatorios' };
    }

    // Aquí puedes realizar la lógica de autenticación con la base de datos o algún otro método

    // Ejemplo de comprobación simple de nombre y contraseña
    if (nombre === 'usuario' && password === 'contraseña') {
      return { message: 'Inicio de sesión exitoso' };
    } else {
      return { error: 'Credenciales incorrectas' };
    }
  }
}
