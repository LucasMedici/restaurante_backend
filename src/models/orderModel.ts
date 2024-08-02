import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./userModel";
import { Adress } from "./adressModel";
import { ProductsInOrder } from "./productsInOrdersModel";

@Entity()
export class Order{


    @PrimaryGeneratedColumn()
    order_id!: number;

    @Column({nullable: false})
    order_status!: string;

    @Column({nullable: false})
    order_value!: number;


    @ManyToOne(() => User, user => user.order, {nullable: false})
    @JoinColumn({name: 'user_id'}) // ALTERANDO NOME QUE SERA EXIBIDO NA TABELA
    user!: User; 

    @ManyToOne(() => Adress, adress => adress.order, {nullable: false})
    @JoinColumn({name: 'adress_id'}) // ALTERANDO NOME QUE SERA EXIBIDO NA TABELA
    adress!: Adress;


    @OneToMany(() => ProductsInOrder, productsInOrder => productsInOrder.order)
    order!: Order[];
}