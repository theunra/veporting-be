import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto, UpdateReportDto } from 'src/report/dto/report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('all')
  async getAllReport() {
    return {
      message: 'success',
      data: await this.reportService.getAllReport(),
    };
  }

  @Get(':id')
  async getReport(@Param('id') id: string) {
    return {
      message: 'success',
      data: await this.reportService.getReport(id),
    };
  }

  @Post('create')
  async createReport(@Body() report: CreateReportDto) {
    return {
      message: 'success',
      data: await this.reportService.createReport(report),
    };
  }

  @Put(':id')
  async updateReportById(
    @Param('id') id: string,
    @Body() reportUpdate: UpdateReportDto,
  ) {
    return {
      message: 'success',
      data: await this.reportService.updateReport(id, reportUpdate),
    };
  }

  @Delete(':id')
  async deleteReportById(@Param('id') id: string) {
    return {
      message: 'success',
      data: await this.reportService.deleteReport(id),
    };
  }
}
