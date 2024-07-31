import { Router } from "express";
import { UserController } from "../controllers/userController";


const useRouter = Router();
const userController = new UserController();

useRouter.post('/user', userController.createUser);
useRouter.get('/users', userController.getUsers);
useRouter.get('/user/:id', userController.getUserById);
useRouter.put('/user/:id', userController.updateUser);
useRouter.delete('/user/:id', userController.deleteUser);


export default useRouter