import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from "typeorm";
import { Adress } from "./adressModel";
import { Pedido } from "./pedidoModel";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column({nullable: false})
    user_name!: string;

    @Column({nullable: false})
    user_email!: string;

    @Column({nullable: false})
    user_password!: string;

    @Column({nullable: false})
    user_cpf!: string;

    @Column({nullable: false})
    user_tel!: string;

    @OneToMany(() => Adress, adress => adress.user)
    adress!: Adress[];

    @OneToMany(() => Pedido, pedido => pedido.user)
    pedido!: Pedido[];
}