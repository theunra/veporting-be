import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from '@/report/entities/report.entity';
import { EntityManager, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import {frameworkIdx, productTypeIdx, testMethodIdx} from './report.data';
import { createReadStream, existsSync, readFileSync, unlink, unlinkSync, writeFileSync } from 'fs';
import { createDocument } from './docx-generator/report-document';
import { Packer } from 'docx';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
    private readonly entityManager: EntityManager,
  ) {}

  getReportFilePath(id: string){
    return `src/report/generated-docx/${id}.docx`;
  }

  async getAllReport() {
    return this.reportRepository.find({});
  }

  async createReport(report: CreateReportDto) {
    const new_report = this.reportRepository.create({
      id: uuidv4(),
      client_name: report.client_name,
      test_method: report.test_method,
      product_type: report.product_type,
      framework: report.framework,
      target_type: report.target_type,
      target_address: report.target_address,
      report_date: new Date(report.report_date),
      end_date: new Date(report.end_date),
      credential_username: report.credential_username,
      credential_password: report.credential_password,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return this.reportRepository.save(new_report);
  }

  async updateReportDocx(report: Report) : Promise<boolean> {

    if(!report) return false;

    const reportFilePath = this.getReportFilePath(report.id);

    //delete old file
    if(existsSync(reportFilePath)){
      try{
        unlinkSync(reportFilePath);
        
        //wait for file actually deleted
        while(existsSync(reportFilePath)){
          await new Promise(r => setTimeout(r, 100));
        }
      } catch {
        console.log("file not exist");
        return false;
      }
    }

    const docx = createDocument({
      client_name : report.client_name,
      test_method : `${report.test_method}`,
      product_type : `${report.product_type}`,
      framework : `${report.framework}`,
      report_date : this.convertDateToddMMYYID(report.report_date),
      target_address : report.target_address,
      target_type : report.target_type,
      findings : [],
      credential_username : report.credential_username,
      credential_password : report.credential_password,
    });

    //write new file
    Packer.toBuffer(docx).then((buffer)=>{
      writeFileSync(reportFilePath, buffer);
    });

    //wait for file to actually generate
    while(!existsSync(reportFilePath)){
      await new Promise(r => setTimeout(r, 100));
    }
    
    return true;
  }

  async downloadReport(id: string) {
    const report = await this.reportRepository.findOne({
      where: { id: id, },
    });

    if(!report) return 404;
    
    const reportFilePath = this.getReportFilePath(report.id); 

    //DUMMY////////////////////////
    const fileExist = false;

    if(!fileExist) {
      await this.updateReportDocx(report);
    }
    ////////////////////////////

    const file = readFileSync(reportFilePath);
    return file;
  }

  async getReport(id: string) {
    return this.reportRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async updateReport(id: string, reportUpdate: UpdateReportDto) {
    const report = await this.getReport(id);

    if (!report) return;

    const updated_report = {
      ...report,
      ...reportUpdate,
      updated_at: new Date(),
    };

    return this.reportRepository.save(updated_report);
  }

  async deleteReport(id: string) {
    const report = await this.getReport(id);
    return this.reportRepository.remove(report);
  }

  monthListID(){
    return [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
  }
  
  convertDateToddMMYYID(date: Date){
    return `${date.getDate()} ${this.monthListID()[date.getMonth()]} ${date.getFullYear()}`;
  }
}
