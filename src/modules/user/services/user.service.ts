import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async login(id: string, password: string) {
    return await this.userRepository.findOne({
      select: { id: true, password: true },
      where: { id, password },
    });
  }

  async join(
    id: string,
    password: string,
    profileImageUrl: string,
    email: string,
    nickname: string,
  ) {
    return await this.userRepository.insert({
      id,
      password,
      profileImageUrl,
      email,
      nickname,
    });
  }

  async findById(id: string) {
    return await this.userRepository.findOne({
      select: { id: true, nickname: true, email: true, status: true },
      where: { id },
    });
  }
}
