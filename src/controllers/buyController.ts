import BuyService from "../services/buyService";
import { Request, Response } from "express";

const buyService = new BuyService()


export class BuyController{

    public async createNewBuy(req: Request, res: Response){
        try{
            const order = req.body.order
            const product = req.body.product
            const new_buy = await buyService.createANewBuy(order, product)
            return res.status(201).json(new_buy)
        }catch(error){
            res.status(500).json(error)
        }
    }

}