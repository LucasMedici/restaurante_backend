import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    product_id!: number;

    @Column({nullable: false})
    product_name!: string;

    @Column()
    product_desc!: string;

    @Column({nullable: false})
    product_price!: number;

    @Column({nullable: false})
    product_isEnable!: boolean;


}