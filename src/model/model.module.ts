import { ActivityLog } from '@/activity_log/entities/activity_log.entity';
import { ResetPassword } from '@/auth/entities/resetPassword.entity';
import { Finding } from '@/finding/entities/finding.entity';
import { Report } from '@/report/entities/report.entity';
import { User } from '@/user/entities/user.entity';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
        // entities: ['../**/*.entity{.ts,.js}'],
        entities: [Report, Finding, User, ResetPassword, ActivityLog],
        migrations: ['../../database/migrations/*'],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class ModelModule {}
