import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity ({name:"publicacion"}) // con el decorador entity typeorm lo reconoce como entidad, desp se escribe el nombre de la tabla
export class Publicacion {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  textoPublicacion: string;

  @Column({default: false})
  menu: boolean;


  @Column({default: null})
  parentId:number;
  // parent id deberia ser null si es una publicacion principal
  // y si es un comentario deberia tener el id de la publicacion principal.
}