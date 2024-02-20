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
            id : "uuid1",
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

export function createReport(report: Report){
    report_datas.report.push(report);
}

export function deleteReportById(id: string){
    report_datas.report.filter((report) => report.id != id);
}