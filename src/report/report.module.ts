import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from '@/report/entities/report.entity';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Report]), UserModule],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}
