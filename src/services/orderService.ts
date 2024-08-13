import { dbConfig } from "../infra/dbConfig/dbConfig";
import { Order } from "../models/orderModel";

export default class OrderService{
    private orderRepository = dbConfig.getRepository(Order)

    async createOrder(order: Order) {
        await this.orderRepository.save(order)
        return order;
    }

    async getAllOrders(){
        return await this.orderRepository.find()
    }

    async getOrderById(id: number){
        return await this.orderRepository.findOneBy({order_id: id})
    }

    async updateOrder(id: number, updatedInfo: Order) {
        const orderFinded = await this.orderRepository.findOneBy({order_id: id})
        if(!orderFinded){
            throw new Error("Order not found")
        }

        const updatedPedido = {...orderFinded, ...updatedInfo}
        return await this.orderRepository.save(updatedPedido)

    }

    async deleteOrder(id: number){
        await this.orderRepository.delete({order_id: id})
    }
}