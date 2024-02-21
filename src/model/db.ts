import { v4 as uuidv4 } from 'uuid';

export enum ReportType {
    PENETRATION = 'penetration',
    VULNERABILITY = 'vulnerability',
}

export enum TestMethod {
    GREYBOX = 'greybox',
}

export interface Report {
    id : string,
    client_name : string,
    product_type : ReportType,
    report_date : Date,
    end_date : Date,
    test_method : TestMethod,
    created_at : Date,
    updated_at : Date,
}
export interface ReportData {
    report: Report[]
}

const report_datas : ReportData = {
    report: [
        {
            id : 'ca6a593d-5fbe-44b9-8ee4-be56443e9934',
            client_name : "PT Agus Sejahtera", 
            product_type : ReportType.PENETRATION,
            report_date : new Date(),
            end_date : new Date("2024-03-20"),
            test_method : TestMethod.GREYBOX,
            created_at : new Date(),
            updated_at :new Date(),
        },
    ],
}

export function getAllReport(){
    return report_datas;
}

export function getReportById(id: string){
    return report_datas.report.find((report)=>report.id == id);
}

export function createReport(report: Report){
    report.id = uuidv4();
    report.created_at = new Date();
    report.updated_at = new Date();
    report_datas.report.push(report);
}

export function deleteReportById(id: string){
    report_datas.report = report_datas.report.filter((report) => report.id != id);
}

export function updateReportById(id: string, reportUpdate){
    const report_idx = report_datas.report.findIndex((report)=>report.id == id);

    report_datas.report[report_idx] = {
        ...report_datas.report[report_idx],
        ...reportUpdate,
        updated_at : new Date(),
    }

}