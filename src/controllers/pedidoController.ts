import OrderService from "../services/orderService"
import { Request, Response } from "express"

const orderService = new OrderService()

export class OrderController{
    public async createOrder(req: Request, res: Response){
        try{
            const newOrder = await orderService.createOrder(req.body)
            return res.status(201).json(newOrder)
        }catch(error){
            res.status(500).json(error)
        }
    }

    public async getOrders(req: Request, res: Response){
        try{
            const pedidos = await orderService.getAllOrders()
            return res.status(200).json(pedidos)
        }catch(error){
            res.status(500).json(error)
        }
    }

    public async getOrderById(req: Request, res: Response) {
        try{
            const orderId = parseInt(req.params.id)
            const order = await orderService.getOrderById(orderId)

            if(!order){
                return res.status(404).json({message: 'Order not found'})
            }
            return res.status(200).json(order)

        }catch(error){
            res.status(500).json(error)
        }
    }

    public async updateOrder(req: Request, res: Response){
        try{
            const orderId = parseInt(req.params.id)
            const updatedInfo = req.body

            const order = await orderService.getOrderById(orderId)
            if(!order){
                return res.status(404).json({message: 'Order not found'})
            }

            await orderService.updateOrder(orderId, updatedInfo)
            return res.status(200).json({message: 'Order updated'})
        }catch(error){
            res.status(500).json(error)
        }
    }

    public async deleteOrder(req: Request, res: Response) {
        try{
            const orderId = parseInt(req.params.id)
            const order = await orderService.getOrderById(orderId)

            if(!order){
                return res.status(404).json({message: 'Order not found'})
            }

            await orderService.deleteOrder(orderId)
            return res.status(200).json({message: 'Order deleted'})
        }catch(error){
            res.status(500).json(error)
        }
    }
}