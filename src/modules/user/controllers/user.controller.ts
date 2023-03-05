import { Controller, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import {
  LoginUserRequestDto,
  CreateUserRequestDto,
} from '../services/dto/index';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async postLogin(@Body() request: LoginUserRequestDto) {
    console.log(request);
    return await this.userService.login(request);
  }

  @Post('join')
  async postJoin(@Body() request: CreateUserRequestDto) {
    await this.userService.join(request);

    return;
  }

  // @Patch()
  // async patchMyInfo() {
  //   return;
  // }

  // @Get()
  // async getMyInfo() {
  //   return;
  // }

  @Get(':id')
  async getOtherInfo(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
}
