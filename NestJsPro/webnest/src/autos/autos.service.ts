import { Injectable } from "@nestjs/common";

@Injectable()
export class  AutosService {
    bddAutos= [];
    numRegistros =1 ;
    constructor(){
        const auto = {
            nombre: 'MAXDA',
            tipo: 'deportivo',
            anio: 1,
            fecha: new Date(2020,13,11),
            precio: 1000,
        };
        this.listar(auto);

    }

    listar(nuevoAuto){
        nuevoAuto.id = this.numRegistros;
        this.numRegistros ++;

    }

}