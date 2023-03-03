import { DataSource } from 'typeorm';
import { User } from '../modules/user/entities/user.entity';

export const databaseProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'suporty-user',
      entities: [User],
      synchronize: true,
      logging: true,
    });

    return dataSource.initialize();
  },
};
