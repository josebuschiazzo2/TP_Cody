import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  // Simula una base de datos de usuarios (reemplaza con la BD real)
  usuarios = [
    { nombre: 'usuario1', password: 'contraseña1' },
    { nombre: 'usuario2', password: 'contraseña2' },
    // Realiza las puebas en Postman o alguna API. Agregar más usuarios si es necesario
  ];

  // Método para autenticar al usuario
  authenticateUser(nombre, password) {
    const usuario = this.usuarios.find(
      (u) => u.nombre === nombre && u.password === password,
    );
    if (usuario) {
      return { message: 'Inicio de sesión exitoso' };
    } else {
      return { error: 'Credenciales incorrectas' };
    }
  }
}
