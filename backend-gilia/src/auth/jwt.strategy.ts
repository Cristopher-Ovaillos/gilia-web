import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el JWT desde el header
      secretOrKey: 'SECRET_KEY', // Usa una variable de entorno en producción
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.username); // Valida el usuario en la base de datos
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user; // Si el usuario es valido, lo devuelve
  }
}
