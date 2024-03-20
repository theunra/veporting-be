import { Report } from '@/report/entities/report.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar', {
    nullable: true,
  })
  email: string;

  @Column('varchar')
  username: string;

  @Column('varchar', { length: 60 })
  pasw_hash: string;

  @Column('varchar')
  pasw_salt: string;

  @OneToOne(() => Report, (report) => report.user)
  reports: Report[]
}
