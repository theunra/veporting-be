import { Controller, Get } from '@nestjs/common';
import { ActivityLogService } from './activity_log.service';

@Controller('activity-log')
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Get()
  getAllLog() {
    return {
      message: 'success',
      data: this.activityLogService.get(),
    };
  }
}
