import { Controller, Get } from '@nestjs/common';
import { ActivityLogService } from './activity_log.service';

@Controller('activity-log')
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Get()
  async getAllLog() {
    return {
      message: 'success',
      data: await this.activityLogService.get(),
    };
  }
}
