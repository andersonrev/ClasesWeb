import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {AutoEntity} from './auto.entity'

@Module({
  imports: [
      //modules
      TypeOrmModule.forFeature([AutoEntity],'default')

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