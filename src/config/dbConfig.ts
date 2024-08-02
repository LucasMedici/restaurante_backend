
import { DataSource } from "typeorm"
import { Product } from "../models/productModel"
import { User } from "../models/userModel"
import { Adress } from "../models/adressModel"
import { Order } from "../models/orderModel"
import { ProductsInOrder } from "../models/productsInOrdersModel"

export const dbConfig = new DataSource({    
    type:'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "db_restaurante",
    synchronize: true,
    logging: true,
    entities: [Product, User, Adress, Order, ProductsInOrder],
    subscribers: [],
    migrations: [],

})




