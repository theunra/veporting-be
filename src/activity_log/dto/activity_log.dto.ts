import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateActivityLogDto {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;
  @IsString()
  @IsNotEmpty()
  action: string;
}
