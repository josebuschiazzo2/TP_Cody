import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { RegistroController } from './registro/registro.controller';
import { RegistroService } from './registro/registro.service';

@Module({
  imports: [], // Agrega los módulos importados aquí
  controllers: [AppController, LoginModule, RegistroController],
  providers: [AppService, LoginService, RegistroService],
})
export class AppModule {}
