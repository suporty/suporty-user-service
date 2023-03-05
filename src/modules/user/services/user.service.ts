import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginUserRequestDto, CreateUserRequestDto } from './dto/index';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
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
