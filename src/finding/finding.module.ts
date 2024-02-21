import { Module } from '@nestjs/common';
import { FindingService } from './finding.service';
import { FindingController } from './finding.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finding } from './entities/finding.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Finding])],
  controllers: [FindingController],
  providers: [FindingService],
})
export class FindingModule {}
