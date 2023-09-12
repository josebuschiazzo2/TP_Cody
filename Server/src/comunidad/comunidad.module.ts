import { Module } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { ComunidadController } from './comunidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './entities/comunidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacion])],
  controllers: [ComunidadController],
  providers: [ComunidadService],
})
export class ComunidadModule {}
