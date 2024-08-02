import { Order } from "../models/orderModel";
import { Product } from "../models/productModel";

export interface ProductsInOrderCreateDTO {
    amount: number;
    order: Order;
    product: Product;
    product_value: number;
    product_total_value: number;
}