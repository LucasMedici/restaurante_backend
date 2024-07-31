import {PrimaryColumn, Column, Entity, ManyToOne} from "typeorm";
import { User } from "./userModel";


@Entity()
export class Adress{

    @PrimaryColumn()
    adress_id!: number;

    @Column()
    adress_street!: string;

    @Column()
    adress_number!: number;

    @Column()
    adress_complemento!: string;

    @Column()
    adress_bairro!: string;

    @Column()
    adress_cep!: string;


    @ManyToOne(() => User, user => user.adress)
    user!: User;

}