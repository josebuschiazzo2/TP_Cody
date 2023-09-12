import { Controller, Get, Post, Put, Body, Param, Delete, UseInterceptors } from '@nestjs/common';
 import { ComunidadService } from './comunidad.service';
// import { CreateComunidadDto } from './dto/create-comunidad.dto';
// import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Publicacion } from './entities/comunidad.entity';

@Controller('comunidad')
export class ComunidadController {
  constructor(private readonly comunidadService: ComunidadService) {}

  @Get('saludo')
  saludo() {
    return "hola mundo !!!!!"
  }
  @Get('publicaciones')
  async getPublicaciones():Promise<Publicacion[]>{ 
  return await this.comunidadService.getPublicaciones();
  }

  @Get('getMenu')
  async getMenu():Promise<Publicacion[]>{
    return await this.comunidadService.getMenu()
  }  

  @Post('publicar')
public publicar(@Body() body:any):any{
    return this.comunidadService.publicar(body)
 }
  @Delete('eliminar/:id')
  async eliminarPublicacion(@Param('id')id:number){
    return await this.comunidadService.eliminar(id)
  } 
  @Put('menu/:id')
  async mostrarMenu(@Param('id') id: number): Promise<void> {
    await this.comunidadService.mostrarMenu(id);
    
  }
}