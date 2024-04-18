import { Module } from '@nestjs/common';
import { ActivityLogService } from './activity_log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLog } from './entities/activity_log.entity';
import { ActivityLogController } from './activity_log.controller';
import { ActivityListener } from './listener/activity.listener';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityLog])],
  providers: [ActivityLogService, ActivityListener],
  exports: [ActivityLogService],
  controllers: [ActivityLogController],
})
export class ActivityLogModule {}
