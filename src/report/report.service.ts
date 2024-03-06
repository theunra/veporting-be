import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from 'src/report/entities/Report.entity';
import { EntityManager, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
    private readonly entityManager: EntityManager,
  ) {}

  async getAllReport() {
    return this.reportRepository.find({});
  }

  async createReport(report: CreateReportDto) {
    // const product_type = productTypeIdx(report.product_type);
    // const test_method = testMethodIdx(report.test_method);
    // const framework = frameworkIdx(report.framework);

    // if (product_type < 0) return;
    // if (test_method < 0) return;
    // if (framework < 0) return;

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
}
