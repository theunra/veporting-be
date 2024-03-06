import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFindingDto } from './dto/create-finding.dto';
import { UpdateFindingDto } from './dto/update-finding.dto';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Finding } from './entities/Finding.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindingService {
  constructor(
    @InjectRepository(Finding)
    private findingRepository: Repository<Finding>,
  ) {}

  async create(createFindingDto: CreateFindingDto) {
    // console.log(createFindingDto);
    const data = this.findingRepository.create({
      id: uuidv4(),
      ...createFindingDto,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return await this.findingRepository.save(data);
  }

  async findAll() {
    return await this.findingRepository.find();
  }

  async findOne(id: string) {
    try {
      const data = await this.findingRepository.findOne({
        where: { id },
      });
      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: string, updateFindingDto: UpdateFindingDto) {
    try {
      const data = await this.findingRepository.update(id, updateFindingDto);
      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: string) {
    try {
      const data = await this.findingRepository.delete(id);
      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
