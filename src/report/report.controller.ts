import { Body, Controller, Delete, Get, Header, Param, Post, Put, Res, StreamableFile } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto, UpdateReportDto } from 'src/report/dto/report.dto';
import { Response } from 'express';

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
  
  @Get(':id/download')
  async downloadReport(
      @Param('id') id: string,
      @Res({ passthrough : true }) res: Response,
  ){
      return {
        message: 'success',
        data: await this.reportService.downloadReport(id),
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
