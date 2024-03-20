import { Finding } from '@/finding/entities/finding.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { ProductType, Framework, TestMethod, ReportStatus } from '../report.data';
import { User } from '@/user/entities/user.entity';

@Entity('report')
export class Report {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  client_name: string;

  @Column('enum', { enum: ProductType })
  product_type: string; 

  @Column('timestamptz')
  report_date: Date;

  @Column('timestamptz')
  end_date: Date;

  @Column('enum', { enum: TestMethod })
  test_method: string;

  @Column('enum', { enum: Framework })
  framework: string;

  @Column('enum', { enum: ReportStatus })
  status: string;

  @Column('varchar')
  target_type: string;

  @Column('text', { array: true, default: [] })
  target_address: string[];

  @Column('varchar')
  credential_username: string;

  @Column('varchar')
  credential_password: string;

  @Column('timestamptz')
  created_at: Date;

  @Column('timestamptz')
  updated_at: Date;

  @OneToOne(() => Finding, (finding) => finding.report)
  findings: Finding[];

  @ManyToOne(() => User, (user) => user.reports)
  user: User
}
