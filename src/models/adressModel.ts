import {PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany} from "typeorm";
import { User } from "./userModel";
import { Order } from "./orderModel";


@Entity()
export class Adress{

    @PrimaryGeneratedColumn()
    adress_id!: number;

    @Column({nullable: false})
    adress_street!: string;

    @Column({nullable: false})
    adress_number!: number;

    @Column()
    adress_complemento!: string;

    @Column({nullable: false})
    adress_bairro!: string;

    @Column({nullable: false})
    adress_cep!: string;


    
    @ManyToOne(() => User, user => user.adress, {nullable: false})
    user!: User;



    @OneToMany(() => Order, order => order.adress)
    order!: Order[];

}