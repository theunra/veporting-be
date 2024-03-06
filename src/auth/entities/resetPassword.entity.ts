import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reset_password')
export class ResetPassword {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  token: string;
  @Column('uuid')
  user_id: string;
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
