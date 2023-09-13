import { Injectable } from '@nestjs/common';
// import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { Publicacion } from './entities/comunidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComunidadService {
  constructor(
    @InjectRepository(Publicacion)
    private comunidadRepository: Repository<Publicacion>,
  ) {}


//                     ******************** CREATE ********************
  async publicar(body: any) {
    const info = this.comunidadRepository.create({
      id: body.id,
      textoPublicacion: body.publicacion,
    });
    await this.comunidadRepository.save(info);
  }




  //                     ******************** READ ********************
  async getPublicaciones(): Promise<Publicacion[]> {
    return await this.comunidadRepository.find();
  }

  async getId(): Promise<any> {
    return await this.comunidadRepository.find({
      select: {
        id: true,
      },
    });
  }

  async getMenu(): Promise<any> {
    return await this.comunidadRepository.find({
      select: {
        menu: true,
      },
    });
  }


  //                     ******************** UPDATE ********************

  async mostrarMenu(id: number): Promise<boolean> {
    const publicacion: Publicacion = await this.comunidadRepository.findOne({
      where: {
        id: id,
      },
    });
    if (publicacion) {
      const nuevoEstadoMenu = !publicacion.menu;
      // Actualiza el estado "menu" en la base de datos
      await this.comunidadRepository.update(id, { menu: nuevoEstadoMenu });
      console.log(
        `Estado "menu" actualizado a ${nuevoEstadoMenu} para la publicación con ID ${id}`,
      );
      // Devuelve el nuevo estado de "menu"
      return nuevoEstadoMenu;
    } else {
      console.log(`No se encontró ninguna publicación con el ID ${id}`);
      return false; // Devuelve "false" si no se encuentra ninguna publicación
    }
  }


  //                     ******************** DELETE ********************
  async eliminar(id: any): Promise<void> {
    const publicacionAEliminar = await this.comunidadRepository.findOne({
      where: {
        id: id, // Utiliza la sintaxis id: id para comparar igualdad
      },
    });

    if (publicacionAEliminar) {
      await this.comunidadRepository.remove(publicacionAEliminar);
    }
  }
}
