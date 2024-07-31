import AdressService from "../services/adressService";
import { Request, Response } from "express";


const adressService = new AdressService()

export class AdressController{


    public async createAdress(req: Request, res: Response){
        try{
            const newAdress = await adressService.createAdress(req.body)
            return res.status(201).json('New Adress created!'+ newAdress)
        }catch(error){
            res.status(500).json({message: 'Error creating a new adress: '+ error})
        }
    }


    public async getAddresses(req: Request, res: Response){
        try{
            const addresses = await adressService.getAllAdress()
            return res.status(200).json(addresses)
        }catch(error){
            res.status(500).json({message: 'Error getting addresses: '+ error})
        }
    }


    public async getAdressById(req: Request, res: Response) {
        try{
            const adressId = parseInt(req.params.id)
            const adress = await adressService.getAdressById(adressId)

            if(!adress){
                return res.status(404).json({message: 'Adress not found'})
            }
            return res.status(200).json(adress)

        }catch(error){
            res.status(500).json({message: 'Error getting adress: '+ error})
        }
    }


    public async updateAdress(req: Request, res: Response){
        try{
            const adressId = parseInt(req.params.id)
            const updatedInfo = req.body

            const adress = await adressService.getAdressById(adressId)
            if(!adress){
                return res.status(404).json({message: 'Adress not found'})
            }

            await adressService.updateAdress(adressId, updatedInfo)
            return res.status(200).json({message: 'Adress updated'})
        }catch(error){
            res.status(500).json({message: 'Error updating adress: '+ error})
        }
    }


    public async deleteAdress(req: Request, res: Response){
        try{
            const adressId = parseInt(req.params.id)
            const adress = await adressService.getAdressById(adressId)

            
            if(!adress){
                return res.status(404).json({message: 'Adress not found'})
            }

            await adressService.deleteAdress(adressId)
            return res.status(200).json({message: 'Adress deleted'})

        }catch(error){
            res.status(500).json({message: 'Error deleting adress: '+ error})
        }
    }
}