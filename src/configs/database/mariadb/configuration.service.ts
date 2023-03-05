import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MariaDBConfigService {
  constructor(private configService: ConfigService) {}

  get type(): string {
    return String(this.configService.get<string>('mariadb.type'));
  }

  get host(): string {
    return String(this.configService.get<string>('mariadb.host'));
  }

  get port(): number {
    return Number(this.configService.get<string>('mariadb.port'));
  }

  get username(): string {
    return String(this.configService.get<string>('mariadb.username'));
  }

  get password(): string {
    return String(this.configService.get<string>('mariadb.password'));
  }

  get database(): string {
    return String(this.configService.get<string>('mariadb.database'));
  }
}
