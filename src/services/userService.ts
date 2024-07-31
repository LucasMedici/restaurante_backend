import { dbConfig } from "../config/dbConfig";
import { userCreateDTO } from "../dtos/userCreateDTO";
import { userUpdateDTO } from "../dtos/userUpdateDTO";
import { User } from "../models/userModel";
import { Adress } from "../models/adressModel";

export default class UserService {
    private userRepository = dbConfig.getRepository(User);
    private adressRepository = dbConfig.getRepository(Adress);

    async createUser(user: User){
            await this.userRepository.save(user); 
            return user;
        }

    async getAllUsers(){
        return await this.userRepository.find();
    }

    async getUserById(id: number){
        return await this.userRepository.findOneBy({user_id: id});
    }

    async updateUser(id: number, updatedInfo: User){
        const userFinded = await this.userRepository.findOneBy({user_id: id});
        if(!userFinded){
            throw new Error("User not found");
        }

        const updatedUser = {...userFinded, ...updatedInfo};
        return await this.userRepository.save(updatedUser);
    }

    async deleteUser(id: number){
        await this.adressRepository.delete({user: {user_id: id}});
        return await this.userRepository.delete({user_id: id});
    }


}