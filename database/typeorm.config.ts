import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Report } from '@/report/entities/report.entity';
import { Finding } from '@/finding/entities/finding.entity';
import { User } from '@/user/entities/user.entity';
config();

const configService = new ConfigService();

export const configOptions = {
  type: configService.getOrThrow('DB_DIALECT'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  host: configService.getOrThrow('DB_HOST'),
  port: configService.getOrThrow('DB_PORT'),
  database: configService.getOrThrow('DB_NAME'),
  synchronize: configService.getOrThrow('DB_SYNC'),
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [Report, Finding, User],
  migrations: [__dirname + '/migrations/*'],
};

export default new DataSource(configOptions);
