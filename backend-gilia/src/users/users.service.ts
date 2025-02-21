import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

//para crear usuarios
//ademas, este metodo no se va usar porque los usuarios lo crearemos insertando a la tabla
  async create(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10); // Cifrado de la contrasenia
    const user = this.usersRepository.create({ username, password: hashedPassword });
    return this.usersRepository.save(user); // guardamos el usuario en la base de datos
  }

  // metodo para encontrar un usuario por nombre de usuario
  async findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { username }, // Buscamos por username
    });
  }

  // metodo para obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.usersRepository.find(); // Obten todos los usuarios
  }
}
