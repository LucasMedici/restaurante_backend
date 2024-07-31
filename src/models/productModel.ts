import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryColumn()
    product_id!: number;

    @Column()
    product_name!: string;

    @Column()
    product_desc!: string;

    @Column()
    product_price!: number;

    @Column()
    product_isEnable!: boolean;


}