import { Injectable } from '@nestjs/common';
import { CreateFindingDto } from './dto/create-finding.dto';
import { UpdateFindingDto } from './dto/update-finding.dto';
import { Repository } from 'typeorm';
import { Finding } from './entities/finding.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindingService {
  constructor(
    @InjectRepository(Finding)
    private findingRepository: Repository<Finding>,
  ) {}

  async create(createFindingDto: CreateFindingDto) {
    const data = await this.findingRepository.create(createFindingDto);
    return this.findingRepository.save(data);
  }

  async findAll() {
    return this.findingRepository.find();
  }

  findOne(id: string) {
    return this.findingRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: string, updateFindingDto: UpdateFindingDto) {
    return this.findingRepository.update(id, updateFindingDto);
  }

  remove(id: string) {
    return this.findingRepository.delete(id);
  }
}
