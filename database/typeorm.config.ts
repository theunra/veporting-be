import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  username: configService.getOrThrow('POSTGRES_USERNAME'),
  password: configService.getOrThrow('POSTGRES_PASSWORD'),
  host: configService.getOrThrow('POSTGRES_HOST'),
  port: configService.getOrThrow('POSTGRES_PORT'),
  database: configService.getOrThrow('POSTGRES_DB'),
  synchronize: configService.getOrThrow('POSTGRES_SYNC'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*'],
});
