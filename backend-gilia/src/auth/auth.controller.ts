//auth.controller.ts
/*
NestJS lo que hace es  que la carpeta auth contiene la logica relacionada con la autenticacio, y dentro 
de esa carpeta, el archivo auth.controller.ts es el que define las rutas y controladores para la 
autenticacion.

En el controlador, la ruta @Post('login') indica que cuando el frontend haga una solicitud POST 
a http://localhost:3000/auth/login, esta sera manejada por el metodo login dentro de AuthController.
*/

// auth.controller.ts



import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('test-db')
  async testDatabase() {
    // Imprime todos los usuarios para verificar la conexión
    const users = await this.authService.getAllUsers();
    console.log('Usuarios en la base de datos:', users);
    return users;
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      return { message: 'Credenciales incorrectas', error: 'Unauthorized', statusCode: 401 };
    }
    const token = await this.authService.login(user);
    return token;
  }
}
