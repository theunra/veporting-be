import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { ActivityLog } from './entities/activity_log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateActivityLogDto } from './dto/activity_log.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ActivityLogService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
    private readonly entityManager: EntityManager,
  ) {}

  async get() {
    const data = await this.activityLogRepository.find();
    return data;
  }

  async find(id: string) {
    try {
      const data = await this.activityLogRepository.findOne({
        where: {
          id,
        },
      });
      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async create(data: CreateActivityLogDto) {
    try {
      const id = uuidv4();
      const result = await this.activityLogRepository.save({
        id,
        ...data,
        created_at: new Date(),
        updated_at: new Date(),
      });
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async destroy(id: string) {
    try {
      await this.activityLogRepository.delete(id);
      return 'success';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
