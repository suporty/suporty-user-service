import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import mariadbConfiguration from './configuration';
import { MariaDBConfigService } from './configuration.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mariadbConfiguration],
      validationSchema: Joi.object({
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number().default(3306),
        DB_USERNAME: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB_NAME: Joi.string().default('suporty-user'),
      }),
    }),
  ],
  providers: [ConfigService, MariaDBConfigService],
  exports: [ConfigService, MariaDBConfigService],
})
export class MariaDBConfigModule {}
