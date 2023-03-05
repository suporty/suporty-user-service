import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginUserRequestDto, CreateUserRequestDto } from './dto/index';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(parma: LoginUserRequestDto) {
    return await this.userRepository.findOne({
      select: { seq: true },
      where: parma,
    });
  }

  async join(param: CreateUserRequestDto) {
    return await this.userRepository.insert(param);
  }

  async findById(id: string) {
    return await this.userRepository.findOne({
      select: {
        profileImageUrl: true,
        nickname: true,
        email: true,
        status: true,
      },
      where: { id },
    });
  }
}
