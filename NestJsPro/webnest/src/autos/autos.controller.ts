import { Controller, Get,Res,Post,Body, Param,Req } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutoInterface } from './interfaces/auto-interface';
import { response } from 'express';

@Controller()
export class AutosController {
  constructor(private readonly _autosService: AutosService) {}

  @Get('lista')
  listarAutos(
      @Res() res) {
        const arreglo=this._autosService.bddAutos;
        res.render('autos/lista-autos',{arregloAutos: arreglo})
  }


  @Get('crear')
  crearAutos(
      @Res() res) {
        res.render('autos/crear-auto')
  }

  @Post('crear')
  crearAutoPost(
    @Body() auto:AutoInterface,
    @Res()res){
      auto.anio=Number(auto.anio);
      auto.precio=Number(auto.precio);
      const fecha=new Date(auto.fecha);
      this._autosService.crear(auto);
      res.redirect('/lista');
    }

@Get('editar/:idAuto')
    actualizarAutoVista(
      @Res() response,
      @Param('idAuto') idAuto: string, 
    ){
      const autoEncontrado=this._autosService.buscarPorId(+idAuto);
      response.render(
        'autos/editar-auto',
        {
          auto:autoEncontrado
        }
      )
    }

@Post('editar/:idAuto')
actualizarAuto(
  @Res() res,
  @Param('idAuto') idAuto:String,
  @Body() auto:AutoInterface
){
  auto.id=+idAuto;
  this._autosService.actualizar(auto,+idAuto);
  res.redirect('/lista');

}

@Post('buscar')
buscar(
  @Res() res,
  @Req() req,
  @Body('busqueda') busqueda:string
){
  const listaBusqueda:AutoInterface[]=this._autosService.buscarPorNombre(busqueda);
  if(listaBusqueda!=null){
    res.render('autos/lista-autos',{arregloAutos:listaBusqueda})
  }else{
    res.render('/lista');
  }
}

@Post('eliminar')
eliminarAuto(
  @Res() res,
  @Body('id') id:string){
    this._autosService.eliminarPorId(Number(id));
    res.redirect('/lista');
  } 
}
