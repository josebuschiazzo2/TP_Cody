import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity ({name:"login"})// mapea una tabla de base de datos ->hace ref a la tabla ciudad.
export class Login {

    @PrimaryGeneratedColumn()
        id:number;

        @Column()
        usuario:string;

        @Column()
        password:string;
    
        @Column({ default: true })
        isActive: boolean;

    }
 