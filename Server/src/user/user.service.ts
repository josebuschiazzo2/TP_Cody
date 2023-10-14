import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User> 
  ){}

  async create(createUserDto: CreateUserDto) {
    const user = new User(
      createUserDto.username,
      createUserDto.nombre,
      createUserDto.apellido,
      createUserDto.nacionalidad,
      createUserDto.fechaNacimiento,
      createUserDto.email,
      createUserDto.password,
      createUserDto.role,
    );
    return await this.userRepository.save(user);
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}