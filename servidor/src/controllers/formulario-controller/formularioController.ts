import { Controller, Post, Body } from '@nestjs/common';
import { FormularioService } from 'src/services/formulario-service';

@Controller('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Post()
  recibirDatos(@Body() data: any) {
    const mensaje = this.formularioService.recibirDatos(data);
    return { mensaje };
  }
}