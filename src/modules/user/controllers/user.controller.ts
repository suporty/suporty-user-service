import { Controller, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async postLogin(@Body('id') id: string, @Body('password') password: string) {
    return await this.userService.login(id, password);
  }

  @Post('join')
  async postJoin(
    @Body('id') id: string,
    @Body('password') password: string,
    @Body('profileImageUrl') profileImageUrl: string,
    @Body('email') email: string,
    @Body('nickname') nickname: string,
  ) {
    return await this.userService.join(
      id,
      password,
      profileImageUrl,
      email,
      nickname,
    );
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
