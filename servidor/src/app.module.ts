import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormularioController } from './controllers/formulario-controller/formularioController';

@Module({
  imports: [],
  controllers: [AppController, FormularioController],
  providers: [AppService],
})
export class AppModule {}
