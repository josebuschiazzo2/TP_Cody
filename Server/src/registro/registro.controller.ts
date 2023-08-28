import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { RegistroService } from './registro.service';

@Controller('registro')
export class RegistroController {
  constructor(private registroService = new RegistroService()) {}

  @Post()
  registrar(@Body() persona) {
    this.registroService.registrarPersona(persona);
    return { message: 'Persona registrada exitosamente' };
  }

  @Get()
  obtenerTodasLasPersonas() {
    return this.registroService.obtenerPersonas();
  }
}
