import { User } from '@/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('activity_log')
export class ActivityLog {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('varchar')
  action: string;

  @Column('timestamptz')
  created_at: Date;

  @Column('timestamptz')
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.activity_logs)
  user: User;
}
