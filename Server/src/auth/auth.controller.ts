import { Role } from 'src/common/enum/role.enum';

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from './entities/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(@Body() loginDto: LoginDto):Promise<string>{
    return this.authService.login(loginDto)
  }

  @Get('home')
  @UseGuards(AuthGuard)
  getHome(@Req() request){
    if (request.user.role !== Role.USER)
      return 'No tienes permiso para acceder a mas info';
    else {
      return 'Bienvenido al Home';
    }
  }
@Get('auth') // devuelve si el usuario es valido o no 
@UseGuards(AuthGuard)
autenticacion(@Req ()request){ // parámetros para representar la solicitud, permite acceder a los datos del usuario. 
const user = request.user 
return user   //devuelve la info del user loggeado
}
}