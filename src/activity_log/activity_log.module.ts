import { Module } from '@nestjs/common';
import { ActivityLogService } from './activity_log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLog } from './entities/activity_log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityLog])],
  providers: [ActivityLogService],
  exports: [ActivityLogService],
})
export class ActivityLogModule {}
