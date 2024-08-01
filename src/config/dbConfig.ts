
import { DataSource } from "typeorm"
import { Product } from "../models/productModel"
import { User } from "../models/userModel"
import { Adress } from "../models/adressModel"
import { Pedido } from "../models/pedidoModel"

export const dbConfig = new DataSource({    
    type:'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "db_restaurante",
    synchronize: true,
    logging: true,
    entities: [Product, User, Adress, Pedido],
    subscribers: [],
    migrations: [],

})




