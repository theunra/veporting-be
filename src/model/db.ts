import { AppDataSource } from "./data_source";
import { Report as reports} from "./entity/Report";
import { v4 as uuidv4 } from 'uuid';

export enum ProductType {
    PENETRATION = 'penetration',
    VULNERABILITY = 'vulnerability',
}

function productTypeIdx(product_type: string){
    const vals = Object.values(ProductType);
    return vals.findIndex((type)=>type==product_type);
}
 
export enum TestMethod {
    GREYBOX = 'greybox',
}

function testMethodIdx(test_method: string){
    const vals = Object.values(TestMethod);
    return vals.findIndex((type)=>type==test_method);
}

export interface Report {
    id : string,
    client_name : string,
    product_type : ProductType,
    report_date : Date,
    end_date : Date,
    test_method : TestMethod,
    created_at : Date,
    updated_at : Date,
}

export async function getAllReport(){
    return reports.find({});
}
export async function createReport(report: any){
    const product_type = productTypeIdx(report.product_type);
    const test_method = testMethodIdx(report.test_method);

    if(product_type < 0) return;
    if(test_method < 0) return;

    const new_report = reports.create({
        id: uuidv4(),
        client_name : report.client_name,
        test_method : test_method,
        product_type : product_type,
        report_date : new Date(report.report_date),
        end_date : new Date(report.end_date),
        created_at : new Date(),
        updated_at : new Date()
    });

    return reports.save(new_report);
}
export async function getReportById(id: string){
    return reports.findOne({
        where:{
            id: id,
        }
    });
}
export async function updateReportById(id: string, reportUpdate: any){
    const report = await getReportById(id);

    if(!report) return;

    if(reportUpdate.product_type){
        reportUpdate.product_type = productTypeIdx(reportUpdate.product_type);
    }

    const updated_report = {
        ...report,
        ...reportUpdate,
        updated_at : new Date(),
    }

    return reports.save(updated_report);
}
export async function deleteReportById(id: string){
    const report = await getReportById(id);
    return reports.remove(report);
}

AppDataSource.initialize().then(()=>{
    console.log('initialized');
}).catch((err)=>{
    console.log(err)
})