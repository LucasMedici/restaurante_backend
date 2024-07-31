import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from "typeorm";
import { Adress } from "./adressModel";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column()
    user_name!: string;

    @Column()
    user_email!: string;

    @Column()
    user_password!: string;

    @Column()
    user_cpf!: string;

    @Column()
    user_tel!: string;

    @OneToMany(() => Adress, adress => adress.user)
    adress!: Adress[];
}