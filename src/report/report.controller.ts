import {
  Body,
  Controller,
  Delete,
  Get,
  UseGuards,
  Param,
  Post,
  Put,
  Query,
  Res,
  StreamableFile,
  Request,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto, UpdateReportDto } from 'src/report/dto/report.dto';
import { Response } from 'express';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('report')
export class ReportController {
  constructor(
    private readonly reportService: ReportService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Get('all')
  async getAllReport(@Request() req) {
    // console.log(req.user);
    this.eventEmitter.emit('activity', {
      user_id: req.user.userId,
      action: 'get all report',
    });
    return {
      message: 'success',
      data: await this.reportService.getAllReport(),
    };
  }

  @Get('count')
  async getReportCount(
    @Request() req,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    this.eventEmitter.emit('activity', {
      user_id: req.user.userId,
      action: 'get report count',
    });

    return {
      message: 'success',
      data: await this.reportService.getReportCountWhereCreatedAtIsBetween(
        new Date(startDate),
        new Date(endDate),
      ),
    };
  }

  @Get(':id')
  async getReport(@Param('id') id: string, @Request() req) {
    this.eventEmitter.emit('activity', {
      user_id: req.user.userId,
      action: 'get report detail',
    });
    return {
      message: 'success',
      data: await this.reportService.getReport(id),
    };
  }

  @Post('create')
  async createReport(@Body() report: CreateReportDto, @Request() req) {
    this.eventEmitter.emit('activity', {
      user_id: req.user.userId,
      action: 'create report',
    });
    return {
      message: 'success',
      data: await this.reportService.createReport(report, req.user),
    };
  }

  @Get(':id/download')
  async downloadReport(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile | number> {
    this.eventEmitter.emit('activity', {
      user_id: res.locals.user.userId,
      action: 'download report',
    });
    return await this.reportService.downloadReport(id);
  }

  @Put(':id')
  async updateReportById(
    @Param('id') id: string,
    @Body() reportUpdate: UpdateReportDto,
    @Request() req,
  ) {
    this.eventEmitter.emit('activity', {
      user_id: req.user.userId,
      action: 'update report',
    });
    return {
      message: 'success',
      data: await this.reportService.updateReport(id, reportUpdate),
    };
  }

  @Delete(':id')
  async deleteReportById(@Param('id') id: string, @Request() req) {
    this.eventEmitter.emit('activity', {
      user_id: req.user.userId,
      action: 'delete report',
    });
    return {
      message: 'success',
      data: await this.reportService.deleteReport(id),
    };
  }
}
