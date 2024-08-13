import { dbConfig } from "../infra/dbConfig/dbConfig";
import { Adress } from "../models/adressModel";

export default class AdressService {
    private adressRepository = dbConfig.getRepository(Adress)



    async createAdress(adress: Adress) {
        await this.adressRepository.save(adress)
        return adress;
    }

    async getAllAdress(){
        return await this.adressRepository.find()
    }

    async getAdressById(id: number){
        return await this.adressRepository.findOneBy({adress_id: id})
    }

    async updateAdress(id: number, updatedInfo: Adress) {
        const adressFinded = await this.adressRepository.findOneBy({adress_id: id})
        if(!adressFinded){
            throw new Error("Adress not found")
        }

        const updatedAdress = {...adressFinded, ...updatedInfo}
        return await this.adressRepository.save(updatedAdress)

    }

    async deleteAdress(id: number){
        await this.adressRepository.delete({adress_id: id})
    }


}