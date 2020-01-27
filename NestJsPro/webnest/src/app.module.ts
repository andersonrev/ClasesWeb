import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { AutosController } from './autos/autos.controller';
import { AutosService } from './autos/autos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoEntity } from './autos/auto.entity';

@Module({
  imports: [
    AutosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'macrefab',
      database: 'auto',
      entities: [AutoEntity],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    AutosController
  ],
  providers: [
    AppService,
  AutosService],
})
export class AppModule {}
