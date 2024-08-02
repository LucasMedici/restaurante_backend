import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orderModel";
import { Product } from "./productModel";

@Entity()
export class ProductsInOrder {

    @PrimaryGeneratedColumn()
    productsInOrderId!: number;

    @Column({nullable: false})
    amount!: number;


    @ManyToOne(() => Order, order => order.order_id, {nullable: false})
    @JoinColumn({name: 'order_id'}) // ALTERANDO NOME QUE SERA EXIBIDO NA TABELA
    order!: Order; 


    @ManyToOne(() => Product, product => product.product_id, {nullable: false})
    @JoinColumn({name: 'product_id'}) // ALTERANDO NOME QUE SERA EXIBIDO NA TABELA
    product!: Product; 


    @Column({nullable: false})
    product_value!: number;

    @Column({nullable: false})
    product_total_value!: number;

}