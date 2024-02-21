import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
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

  @OneToOne(() => Report)
  @JoinColumn()
  report: Report;
}
