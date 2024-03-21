import { ActivityLog } from '@/activity_log/entities/activity_log.entity';
import { Report } from '@/report/entities/report.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

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
  reports: Report[];

  @OneToMany(() => ActivityLog, (activityLog) => activityLog.user)
  activity_logs: ActivityLog[];
}
