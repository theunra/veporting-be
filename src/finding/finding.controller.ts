import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FindingService } from './finding.service';
import { CreateFindingDto } from './dto/create-finding.dto';
import { UpdateFindingDto } from './dto/update-finding.dto';

@Controller('finding')
export class FindingController {
  constructor(private readonly findingService: FindingService) {}

  @Post()
  async create(@Body() createFindingDto: CreateFindingDto) {
    return {
      message: 'success',
      data: await this.findingService.create(createFindingDto),
    };
  }

  @Get()
  async findAll() {
    return {
      message: 'success',
      data: await this.findingService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      message: 'success',
      data: await this.findingService.findOne(id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFindingDto: UpdateFindingDto,
  ) {
    return {
      message: 'success',
      data: await this.findingService.update(id, updateFindingDto),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      message: 'success',
      data: await this.findingService.remove(id),
    };
  }
}
