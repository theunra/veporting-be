import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto, UpdateReportDto } from 'dtos/report.dto';

@Controller('report')
export class ReportController {
    constructor (private readonly reportService: ReportService){};

    //TESTING
    @Get('all')
    getAllReport(){
        return this.reportService.getAllReport();
    }

    @Get(':id')
    getReport(
        @Param('id') id: string,
    ){
        return this.reportService.getReport(id);
    }

    @Post('create')
    createReport(@Body() report : CreateReportDto,){
        return this.reportService.createReport(report);
    }

    @Put(':id')
    updateReportById(
        @Param('id') id:string,
        @Body() reportUpdate : UpdateReportDto,
    ){
        return this.reportService.updateReport(id, reportUpdate);
    }

    @Delete(':id')
    deleteReportById(
        @Param('id') id:string,
    ){
        return this.reportService.deleteReport(id);
    }
}
