import { Injectable } from '@nestjs/common';
import * as db from 'src/model/db';

@Injectable()
export class ReportService {
    getAllReport () : db.ReportData {
        return db.getAllReport();
    }

    createReport(report){
        db.createReport(report);
        return 'ok';
    }

    getReport(id: string){
        const report = db.getReportById(id);
        return report;
    }

    updateReport(id: string, reportUpdate){
        return db.updateReportById(id, reportUpdate);
    }

    deleteReport(id: string){
        return db.deleteReportById(id);
    }
}
