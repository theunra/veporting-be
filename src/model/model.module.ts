import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from '@/report/entities/Report.entity';
import { Finding } from '@/finding/entities/finding.entity';
import { User } from '@/user/entities/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        username: configService.getOrThrow('DB_USERNAME'),
        password: configService.getOrThrow('DB_PASSWORD'),
        host: configService.getOrThrow('DB_HOST'),
        port: configService.getOrThrow('DB_PORT'),
        database: configService.getOrThrow('DB_NAME'),
        synchronize: configService.getOrThrow('DB_SYNC'),
        // entities: [__dirname + '/**/*.entity{.ts,.js}'],
        entities: [Report, Finding, User],
        migrations: [__dirname + '/migrations/*'],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class ModelModule {}
