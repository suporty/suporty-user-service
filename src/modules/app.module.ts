import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../models/database.module';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule {}
