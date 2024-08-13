import { Router } from "express";
import { OrderController } from "../controllers/orderController";

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.post('/order', orderController.createOrder);
orderRouter.get('/orders', orderController.getOrders);
orderRouter.get('/order/:id', orderController.getOrderById);
orderRouter.put('/order/:id', orderController.updateOrder);
orderRouter.delete('/order/:id', orderController.deleteOrder);


export default orderRouter