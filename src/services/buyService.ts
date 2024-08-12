import ProductsInOrderService from "./productsInOrderService";
import OrderService from "./orderService";
import { Order } from "../models/orderModel";
import { Product } from "../models/productModel";


const orderService = new OrderService();
const productsInOrderService = new ProductsInOrderService();

export default class BuyService{

    async createANewBuy(order: Order, products:any){
        try{
            const createdOrder = await orderService.createOrder(order)
            const orderId = createdOrder.order_id

            if (!orderId) {
                throw new Error("Order ID is not defined");
            }

            
            for (const product of products) {
                const productDTO = {
                    order_id: orderId,
                    product_id: product.product_id,
                    amount: product.amount,
                    product_value: product.product_value,
                    product_total_value: (product.amount * product.product_value),
        
                };
                console.log(productDTO)
                await productsInOrderService.createProductInOrder(productDTO);
            }

        }catch(error)   {
            console.error("Error creating a new buy:", error);
            throw error;
        }
    }
}