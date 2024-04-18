import { OnEvent } from '@nestjs/event-emitter';
import { ActivityEvent } from '../events/activity.event';
import { ActivityLogService } from '../activity_log.service';
import { CreateActivityLogDto } from '../dto/activity_log.dto';
import { Inject, Injectable } from '@nestjs/common';

// Listener for activity event
@Injectable()
export class ActivityListener {
  constructor(
    @Inject(ActivityLogService)
    private readonly activityLogService: ActivityLogService,
  ) {}

  // Handle activity event
  @OnEvent('activity')
  async handleCreateActivityLog(event: ActivityEvent) {
    const dto = new CreateActivityLogDto();
    dto.user_id = event.user_id;
    dto.action = event.action;

    await this.activityLogService.create(dto);
  }
}
