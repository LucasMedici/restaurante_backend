import QueueService from "../infra/rabbitMQ/queueSenderService";
import { Request, Response } from "express";

const queueService = new QueueService()



export class QueueController{

    public async newBuyInQueue(req: Request, res: Response){
        try{
            const order = req.body.order
            const product = req.body.product
            const new_buy = await queueService.createANewBuyInQueue(order, product)
            return res.status(201).json(new_buy)
        }catch(error){
            res.status(500).json(error)
        }
    }

}