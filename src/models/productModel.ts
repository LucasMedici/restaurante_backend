import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProductsInOrder } from "./productsInOrdersModel";
import { Order } from "./orderModel";

@Entity()
export class Product {
    map(arg0: (p: any) => void) {
        throw new Error("Method not implemented.");
    }

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


    @OneToMany(() => ProductsInOrder, productsInOrder => productsInOrder.product)
    order!: Order[];


}