//auth.service

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/entities/user.entity';  // Cambié Users por User

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)  // Cambié Users por User
    private usersRepository: Repository<User>,  // Cambié Users por User
    private jwtService: JwtService,
  ) {}

  async getAllUsers() {
    try {
      const users = await this.usersRepository.find();
      return users;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { username } });
    console.log('Usuario encontrado:', user);
  
    if (!user) {
      console.log('Usuario no encontrado');
      return null;
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Contraseña válida:', isPasswordValid);
  
    if (!isPasswordValid) {
      console.log('Contraseña incorrecta');
      return null;
    }
  
    return { id: user.id, username: user.username };
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
