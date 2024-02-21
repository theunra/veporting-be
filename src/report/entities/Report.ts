import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report extends BaseEntity{
    @PrimaryColumn("uuid")
    id : string;

    @Column("varchar")
    client_name : string;

    @Column("char")
    product_type : number;
    
    @Column("timestamptz")
    report_date : Date;
    
    @Column("timestamptz")
    end_date : Date;
    
    @Column("char")
    test_method : number;
    
    @Column("timestamptz")
    created_at : Date;
    
    @Column("timestamptz")
    updated_at : Date;
}
