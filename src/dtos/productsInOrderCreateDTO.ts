import { Order } from "../models/orderModel";
import { Product } from "../models/productModel";

export interface ProductsInOrderCreateDTO {
    product_id: number;
    amount: number;
    product_value: number;
    product_total_value: number;
    order_id: number;
}