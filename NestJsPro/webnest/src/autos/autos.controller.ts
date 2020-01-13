import { Controller, Get ,Response} from "@nestjs/common";
import { AutosService } from "./autos.service";

@Controller()
export class AutosController {
    constructor(private readonly _autosService: AutosService){

    }

    @Get()
    listarAutos(
        @Response(res){
            const arreglo = this._autosService.bddAutos,
            res.render('autos/crear-auto',{
                arregloAutos: arreglo
            })
        }
    ){

        
     
    }
}