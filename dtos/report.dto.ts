import { IsDate, IsNotEmpty, IsString, isString } from "class-validator";

export class CreateReportDto {
    @IsString()
    @IsNotEmpty()
    client_name : string;

    @IsString()
    @IsNotEmpty()
    product_type : string;

    @IsDate()
    report_date : Date;

    @IsDate()
    end_date : Date;

    @IsString()
    @IsNotEmpty()
    test_method : string;
}