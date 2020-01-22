import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';

@Module({
  imports: [
      //modules
    ],
  controllers: [
      AutosController
      //controladores
    ],
  providers: [
      AutosService
      //validarCedulaService
      //servicios
    ],
})
export class AutosModule {}