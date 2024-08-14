import { Router } from "express";
import { QueueController } from "../controllers/queueController";


const queueRouter = Router();
const queueController = new QueueController()


queueRouter.post('/queue/newbuy', queueController.newBuyInQueue);



export default queueRouter