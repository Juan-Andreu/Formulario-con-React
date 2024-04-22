import { Injectable } from '@nestjs/common';

@Injectable('formulario')
export class FormularioService {
  recibirDatos(data: any): string {
    console.log(data); // Aquí puedes procesar los datos como desees, como guardarlos en una base de datos
    return 'Datos recibidos correctamente';
  }
}