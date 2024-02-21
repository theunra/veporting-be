import { Injectable } from '@nestjs/common';
import * as db from 'src/model/db';

@Injectable()
export class ReportService {
    async getAllReport(){
        return db.getAllReport();
    }

    async createReport(report){        
        return db.createReport(report);
    }

    async getReport(id: string){
        return db.getReportById(id);
    }

    async updateReport(id: string, reportUpdate){
        return db.updateReportById(id, reportUpdate);
    }

    async deleteReport(id: string){
        return db.deleteReportById(id);
    }
}
