import { Role } from 'src/common/enum/role.enum';

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
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
  login(@Body() loginDto: LoginDto){
    return this.authService.login(loginDto)
  }

  @Get('home')
  @UseGuards(AuthGuard)
  getHome(@Req() request){
    if (request.user.role !== Role.ADMIN)
      return 'No tienes permiso para acceder a mas info';
    if (request.user.role === Role.ADMIN) return request.user;
    return 'no deberias ver esto!!!!';
  }

}
