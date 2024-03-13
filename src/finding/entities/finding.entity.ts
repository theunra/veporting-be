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

  @Column('varchar', { nullable: true })
  target: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column('jsonb', { array: false, nullable: true })
  upload_poc: Record<string, any>;

  @Column('varchar', { array: true, nullable: true })
  recommendation: string;

  @Column('varchar', { array: true, nullable: true })
  reference: string;

  @ManyToOne(() => Report, (report) => report.findings)
  report: Report;

  @Column('timestamptz')
  created_at: Date;

  @Column('timestamptz')
  updated_at: Date;
}
