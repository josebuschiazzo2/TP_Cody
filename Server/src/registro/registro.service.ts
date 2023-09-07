import { Injectable } from '@nestjs/common';
import {Registro} from './entities/registro.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RegistroService {
  usuarios = [];
  constructor(
    @InjectRepository(Registro)
private registroRepository:Repository<Registro>
){}
  registrarPersona(persona) {
    this.usuarios.push(persona);
  }

  obtenerPersonas() {
    return this.usuarios;
  }
}
