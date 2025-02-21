
/*
NestJS lo que hace es  que la carpeta auth contiene la logica relacionada con la autenticacio, y dentro 
de esa carpeta, el archivo auth.controller.ts es el que define las rutas y controladores para la 
autenticacion.

En el controlador, la ruta @Post('login') indica que cuando el frontend haga una solicitud POST 
a http://localhost:3000/auth/login, esta sera manejada por el metodo login dentro de AuthController.
*/

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../users/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      console.log('Recibiendo login ingresado:', loginDto);  
      return await this.authService.login(loginDto);  // se llama al servicio para autentificar que se creo en el archivo auth.service
    } catch (error) {
      console.error('Error en login:', error);  
      throw error;  
    }
  }
}
