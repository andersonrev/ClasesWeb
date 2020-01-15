import { Controller, Get ,Response, Res} from "@nestjs/common";
import { AutosService } from "./autos.service";

@Controller()
export class AutosController {
    constructor(private readonly _autosService: AutosService){

    }

    @Get('lista')
    listarAutos(
        @Res() res
    ){
        const arreglos = this._autosService.bddAutos;
        res.render('autos/lista-autos',{arregloAutos:arreglos})
    }

        
     
}