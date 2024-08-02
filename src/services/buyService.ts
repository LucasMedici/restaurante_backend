import ProductsInOrderService from "./productsInOrderService";
import OrderService from "./orderService";
import { Order } from "../models/orderModel";
import { Product } from "../models/productModel";


const orderService = new OrderService();
const productsInOrderService = new ProductsInOrderService();

export default class BuyService{

    async createANewBuy(order: Order, product: Product){
        const createdOrder = await orderService.createOrder(order)

        // criar a lógica para ter um loop, assim cadastrando uma linha para cada produto do pedido, seguir a base desse produto de baixo

        const produto = {
            amount: 5,
            product_value: 5,
            product_total_value: 50,
            order: createdOrder,
            product: product,
        }

        await productsInOrderService.createProductInOrder(produto)

    }
    
}