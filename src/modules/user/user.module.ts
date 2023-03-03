import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../models/database.module';
import { UserController } from './controllers/user.controller';
import { userProvider } from './providers/user.provider';
import { UserService } from './services/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [userProvider, UserService],
})
export class UserModule {}
