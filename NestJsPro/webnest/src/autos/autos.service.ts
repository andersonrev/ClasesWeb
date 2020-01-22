import { Injectable } from '@nestjs/common';
import { AutoInterface } from './interfaces/auto-interface';
import { lightseagreen } from 'color-name';

@Injectable()
export class AutosService {
  bddAutos=[];
  numReg=1;
  constructor(){
      const auto={
        nombre: 'MAZDA',
        tipo: 'deportivo',
        anio: 2007,
        fecha: new Date(2020,9,1),
        precio: 1000
      };
      this.listar(auto);
    }
    listar(nuevoAuto){
          nuevoAuto.id=this.numReg;
          this.numReg++;
          this.bddAutos.push(nuevoAuto);
          return nuevoAuto;
      }
      crear(nuevoAuto:AutoInterface){
        nuevoAuto.id=this.numReg;
        this.numReg++;
        this.bddAutos.push(nuevoAuto);
        return nuevoAuto;
    }

    buscarPorId(id:number):AutoInterface{
      return this.bddAutos.find(
        (auto)=>{
          return auto.id===id;
        }
      );
    }

    buscarPorNombre(nombre:string):AutoInterface[]{
      if(nombre!=='' && nombre!=null){
        return this.bddAutos.filter(
          (auto)=>{
            return auto.nombre.toUpperCase().includes(nombre.toUpperCase());
          }
        );
        console.log(nombre);
      }else{
        return this.bddAutos;
      }
    }

    actualizar(autoActualizado:AutoInterface,id:number):AutoInterface[]{
      const indice=this.bddAutos.findIndex(
        (auto)=>{
          return auto.id===id;
        }
      );
      console.log(indice);
      autoActualizado.id=this.bddAutos[indice].id;
      this.bddAutos[indice]=autoActualizado;
      return this.bddAutos;

    }

    eliminarPorId(id:number):AutoInterface[]{
      const indice=this.bddAutos.findIndex(
        (auto)=>{
          return auto.id===id;
        }
      );
      this.bddAutos.splice(indice,1);
      return this.bddAutos;

    }


}