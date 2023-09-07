import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity ({name:"registro"})
export class Registro {

    @PrimaryGeneratedColumn()
        id:number;

        @Column()
        nombre:string;

        @Column()
        apellido:string;

        @Column()
        Nacionalidad:string;
       
        @Column()
        email:string;

        @Column()
        fechaNacimiento:Date;

        @Column({ default: true })
        isActive: boolean;
    }
 