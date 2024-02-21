import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                username: configService.getOrThrow('POSTGRES_USERNAME'),
                password: configService.getOrThrow('POSTGRES_PASSWORD'),
                host: configService.getOrThrow('POSTGRES_HOST'),
                port: configService.getOrThrow('POSTGRES_PORT'),
                database: configService.getOrThrow('POSTGRES_DB'),
                synchronize: configService.getOrThrow('POSTGRES_SYNC'), 
                autoLoadEntities: true
            }),
            inject: [ConfigService],
        }),
    ]
})
export class ModelModule {}
