import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryColumn("uuid")
    id : string;
    
    @Column("varchar")
    name : string;

    @Column("varchar")
    email : string;

    @Column("varchar")
    username : string;

    @Column("varchar", {length:60})
    pasw_hash : string;

    @Column("varchar")
    pasw_salt : string;
}