import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // cors 
  await app.listen(3003);
  Logger.log(`Server is running in localhost ${await app.getUrl()} `) // muestra en la consola el puerto en el que está corriendo el server.
}
bootstrap();
