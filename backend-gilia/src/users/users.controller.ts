//users.controller

import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() body) {
    const { username, password } = body;
    return this.usersService.create(username, password);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
