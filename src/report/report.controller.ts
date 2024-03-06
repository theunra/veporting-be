import { Body, Controller, Delete, Get, Header, Param, Post, Put, Res, StreamableFile } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto, UpdateReportDto } from 'src/report/dto/report.dto';
import { Response } from 'express';

@Controller('report')
export class ReportController {
    constructor (private readonly reportService: ReportService){};

    //TESTING
    @Get('all')
    async getAllReport(){
        return await this.reportService.getAllReport();
    }

    @Get(':id')
    async getReport(
        @Param('id') id: string,
    ){
        return await this.reportService.getReport(id);
    }

    @Get(':id/download')
    @Header('Content-Type', 'text')
    @Header('Content-Disposition', 'attachment; filename="report.docx"')
    async downloadReport(
        @Param('id') id: string,
        @Res({ passthrough : true }) res: Response,
    ){
        return await this.reportService.downloadReport(id);
    }

    @Post('create')
    async createReport(@Body() report : CreateReportDto,){
        return await this.reportService.createReport(report);
    }

    @Put(':id')
    async updateReportById(
        @Param('id') id:string,
        @Body() reportUpdate : UpdateReportDto,
    ){
        return await this.reportService.updateReport(id, reportUpdate);
    }

    @Delete(':id')
    async deleteReportById(
        @Param('id') id:string,
    ){
        return await this.reportService.deleteReport(id);
    }
}
