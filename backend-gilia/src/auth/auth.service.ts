/* maneja la logica y se encargara de generar y verificar los tokens JWT*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log("Verificando usuario:", username); 
    const user = await this.usersRepository.findOneBy({ username });
    if (!user) {
      console.log("Usuario no encontrado");
      return null;
    }
    console.log("Usuario encontrado:", user);
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return { id: user.id, username: user.username };
    }
    console.log("Contraseña incorrecta");
    return null;
  }
  


  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
