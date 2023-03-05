import { IsString, IsEmail, IsUrl } from 'class-validator';

export class CreateUserRequestDto {
  @IsString()
  id: string;

  @IsString()
  password: string;

  @IsUrl()
  profileImageUrl: string;

  @IsEmail()
  email: string;

  @IsString()
  nickname: string;
}
