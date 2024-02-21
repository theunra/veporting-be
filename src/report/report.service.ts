import { Injectable } from '@nestjs/common';
import * as db from 'src/model/db';

@Injectable()
export class ReportService {
    async getAllReport(){
        return db.report.getAllReport();
    }

    async createReport(report){        
        return db.report.createReport(report);
    }

    async getReport(id: string){
        return db.report.getReportById(id);
    }

    async updateReport(id: string, reportUpdate){
        return db.report.updateReportById(id, reportUpdate);
    }

    async deleteReport(id: string){
        return db.report.deleteReportById(id);
    }
}
