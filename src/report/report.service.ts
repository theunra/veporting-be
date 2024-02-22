import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from 'src/report/entities/Report.entity';
import { EntityManager, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export enum ProductType {
  PENETRATION = 'penetration',
  VULNERABILITY = 'vulnerability',
}

export enum TestMethod {
  GREYBOX = 'greybox',
}

function productTypeIdx(product_type: string) {
  const vals = Object.values(ProductType);
  return vals.findIndex((type) => type == product_type);
}

function testMethodIdx(test_method: string) {
  const vals = Object.values(TestMethod);
  return vals.findIndex((type) => type == test_method);
}

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

  async createReport(report) {
    const product_type = productTypeIdx(report.product_type);
    const test_method = testMethodIdx(report.test_method);

    if (product_type < 0) return;
    if (test_method < 0) return;

    const new_report = this.reportRepository.create({
      id: uuidv4(),
      client_name: report.client_name,
      test_method: test_method,
      product_type: product_type,
      report_date: new Date(report.report_date),
      end_date: new Date(report.end_date),
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

  async updateReport(id: string, reportUpdate) {
    const report = await this.getReport(id);

    if (!report) return;

    if (reportUpdate.product_type) {
      reportUpdate.product_type = productTypeIdx(reportUpdate.product_type);
    }

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
