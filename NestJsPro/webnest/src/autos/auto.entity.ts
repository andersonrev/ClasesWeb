import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('auto')
export class AutoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        name:'nombre_auto',
        type:'varchar',
        length: 20,

    })
    nombre: string;

    @Column(
        {
        name:'tipo_auto',
        type:'varchar',
        length: 20,
        }
    )
    tipo: string;

    @Column()
    anio: number;

    @Column()
    fecha: Date;
    
    @Column()
    precio: number;


}