// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  
  async create(username: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({
      username,
      password,
    });
    return await this.usersRepository.save(newUser);
  }

  
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }
}

/*
-- Para crear una contraseña cifrada y guardarla en la tabla `user`
INSERT INTO "user" (username, password)
VALUES ('usuario123', crypt('contra123', gen_salt('bf')));

*/
