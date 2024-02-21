import { AppDataSource } from "./data_source";
import * as report_ from "./report";

AppDataSource.initialize().then(()=>{
    console.log('initialized');
}).catch((err)=>{
    console.log(err)
})

export const report = report_; 