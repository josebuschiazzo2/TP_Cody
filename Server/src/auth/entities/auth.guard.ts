import { Request } from 'express';

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret:
          'LA PALABRA SECRETA O EL SECRETO ES UNA PALABRA SECRETAMENTE SECRETA, Y UN BEAK',
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload; //  Si la verificación es exitosa, el payload del token se asigna al objeto request bajo la propiedad 'user'.
    // el payload contiene los datos del usuario, entonces para acceder ingresamos user.username por ej. 
    } catch {
      throw new UnauthorizedException();
    }
    return true;// Si todo el proceso se ejecuta sin lanzar una excepción, se permite el acceso al recurso protegido y se retorna true.
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
  //**Este método privado toma un objeto Request y extrae el token JWT de la cabecera de autorización,
  //  que debe tener el formato "Bearer <token>". Retorna el token o undefined si no se encuentra un token válido */
}
