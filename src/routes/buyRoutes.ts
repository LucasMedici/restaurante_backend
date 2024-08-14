import { Router } from "express";
import { BuyController } from "../controllers/buyController";

const buyRouter = Router();
const buyController = new BuyController();

buyRouter.post('/buy', buyController.createNewBuy);




export default buyRouter