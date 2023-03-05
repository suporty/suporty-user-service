import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MariaDBConfigModule } from '../configs/database/mariadb/configuration.module';
import { MariaDBConfigService } from '../configs/database/mariadb/configuration.service';
import { User } from '../modules/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MariaDBConfigModule],
      inject: [MariaDBConfigService],
      useFactory: (mariaDBConfigService: MariaDBConfigService) => ({
        type: mariaDBConfigService.type,
        host: mariaDBConfigService.host,
        port: mariaDBConfigService.port,
        username: mariaDBConfigService.username,
        password: mariaDBConfigService.password,
        database: mariaDBConfigService.database,
        entities: [User],
        synchronize: true,
      }),
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DatabaseModule {}
