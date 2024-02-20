import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from 'dtos/report.dto';

@Controller('report')
export class ReportController {
    constructor (private readonly reportService: ReportService){};

    // @Get('all')
    // getReport(){
    //     return 404;
    // }

    @Post('create')
    createReport(@Body() report : CreateReportDto,){
        return this.reportService.createReport(report);
    }
}
