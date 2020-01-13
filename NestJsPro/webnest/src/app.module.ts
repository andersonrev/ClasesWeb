import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { AutosController } from './autos/autos.controller';
import { AutosService } from './autos/autos.service';

@Module({
  imports: [
    AutosModule
  ],
  controllers: [
    AppController,
    AutosController
  ],
  providers: [AppService,
  AutosService],
})
export class AppModule {}
