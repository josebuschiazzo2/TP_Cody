import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistroService {
  usuarios = [];

  registrarPersona(persona) {
    this.usuarios.push(persona);
  }

  obtenerPersonas() {
    return this.usuarios;
  }
}
