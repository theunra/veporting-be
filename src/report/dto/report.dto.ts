import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TestMethod, Framework, ProductType } from '../report.data';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  client_name: string;

  @IsString()
  @IsEnum(ProductType)
  @IsNotEmpty()
  product_type: string;

  @IsString()
  report_date: string;

  @IsString()
  end_date: string;

  @IsString()
  @IsEnum(TestMethod)
  @IsNotEmpty()
  test_method: string;

  @IsString()
  @IsEnum(Framework)
  @IsNotEmpty()
  framework: string;

  @IsString()
  @IsNotEmpty()
  target_type: string;

  @IsArray()
  target_address: string[];

  @IsString()
  @IsNotEmpty()
  credential_username: string;

  @IsString()
  @IsNotEmpty()
  credential_password: string;
}

export class UpdateReportDto extends PartialType(CreateReportDto) {}
