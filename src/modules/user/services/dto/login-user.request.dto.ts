import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserRequestDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
