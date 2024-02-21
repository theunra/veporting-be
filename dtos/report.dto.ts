import { IsDate, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

export class CreateReportDto {
    @IsString()
    @IsNotEmpty()
    client_name : string;

    @IsString()
    @IsNotEmpty()
    product_type : string;

    @IsString()
    report_date : string;

    @IsString()
    end_date : string;

    @IsString()
    @IsNotEmpty()
    test_method : string;
}

export class UpdateReportDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    client_name : string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    product_type : string;

    @IsString()
    @IsOptional()
    report_date : string;

    @IsString()
    @IsOptional()
    end_date : string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    test_method : string;
}