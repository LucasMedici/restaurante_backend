import { Request, Response } from "express";
import { userUpdateDTO } from "../dtos/userUpdateDTO";
import UserService from "../services/userService";
import { User } from "../models/userModel";

const userService = new UserService();


export class UserController{

    public async createUser(req: Request, res: Response) {
        try{
            const newUser = await userService.createUser(req.body)
            return res.status(201).json(newUser);
        }catch(error){
            res.status(500).json({message: 'Error creating a new user: '+ error});
        }
    }

    public async getUsers(req: Request, res: Response){
        try{
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async getUserById(req: Request, res: Response) {
        try{
            const userId = parseInt(req.params.id);
            const user = await userService.getUserById(userId);

            if(!user){
                return res.status(404).json({message: 'User not found'});
            }
            return res.status(200).json(user);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async updateUser(req: Request, res: Response) {
        try{
            const userId = parseInt(req.params.id);
            const updatedInfo = req.body;

            const user = await userService.getUserById(userId);
            if(!user){
                return res.status(404).json({message: 'User not found'});
            }
            await userService.updateUser(userId,updatedInfo);
            return res.status(200).json({message: 'User updated'});


        }catch(error){
            res.status(500).json(error);
        }
    }


    public async deleteUser(req: Request, res: Response) {
        try{
            const userId = parseInt(req.params.id);
            const user = await userService.getUserById(userId);

            if(!user){
                return res.status(404).json({message: 'User not found'});
            }

            await userService.deleteUser(userId);
            return res.status(200).json({message: 'User deleted'});
        }catch(error){
            res.status(500).json(error);
        }
    }



}