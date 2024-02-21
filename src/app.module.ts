import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { ConfigModule } from '@nestjs/config';
import { ModelModule } from './model/model.module';
import { FindingModule } from './finding/finding.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    ModelModule,
    ReportModule,
    FindingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
