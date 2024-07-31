import { Router } from "express";
import { AdressController } from "../controllers/adressController";


const adressRouter = Router();
const adressController = new AdressController();

adressRouter.post('/adress', adressController.createAdress);
adressRouter.get('/addresses', adressController.getAddresses);
adressRouter.get('/adress/:id', adressController.getAdressById);
adressRouter.put('/adress/:id', adressController.updateAdress);
adressRouter.delete('/adress/:id', adressController.deleteAdress);


export default adressRouter