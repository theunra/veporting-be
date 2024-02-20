import { Injectable } from '@nestjs/common';
import * as db from 'src/model/db';

@Injectable()
export class ReportService {
    getAllReport () : db.ReportData {
        return db.getAllReport();
    }

    createReport(report){
        db.createReport(report);
        console.log(db.getAllReport())
        return 'ok';
    }
}
