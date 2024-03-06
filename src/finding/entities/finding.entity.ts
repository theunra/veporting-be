import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Report } from '@/report/entities/Report.entity';

@Entity('finding')
export class Finding {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('int')
  level: number;

  @Column('float')
  cvss: number;

  @Column('enum', { enum: ['open', 'closed'] })
  status: string;

  @Column('varchar')
  target: string;

  @Column('varchar')
  description: string;

  @Column('jsonb')
  upload_poc: Record<string, any>;

  @Column('varchar')
  recommendation: string;

  @Column('varchar')
  reference: string;

  @ManyToOne(() => Report, (report) => report.findings)
  report: Report;

  @Column('timestamptz')
  created_at: Date;

  @Column('timestamptz')
  updated_at: Date;
}
