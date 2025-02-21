import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Importamos el servicio de usuarios
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService, // Usamos el servicio de usuarios
  ) {}

  // validamos usando los servicios de user en la carpeta users/users.service para validar los datos ingresados desde el formulario de login y la base de datos
  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  // generamos el JWT después de validar el usuario
  async login(loginDto: { username: string; password: string }) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new Error('Credenciales incorrectas');
    }
    const payload = { username: user.username, sub: user.id }; // Usamos el ID del usuario en el payload
    return {
      access_token: this.jwtService.sign(payload), // Generamos el token
    };
  }
}
