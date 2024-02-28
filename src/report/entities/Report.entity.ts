import { Finding } from '@/finding/entities/finding.entity';
import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Report extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  client_name: string;

  @Column('char')
  product_type: number;

  @Column('timestamptz')
  report_date: Date;

  @Column('timestamptz')
  end_date: Date;

  @Column('char')
  test_method: number;

  @Column('char')
  framework: number;

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
}
