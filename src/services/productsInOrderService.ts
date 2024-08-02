import { dbConfig } from "../config/dbConfig"
import { ProductsInOrder } from "../models/productsInOrdersModel"
import { ProductsInOrderCreateDTO } from "../dtos/productsInOrderCreateDTO"


export default class ProductsInOrderService{
    private productsInOrderRepository = dbConfig.getRepository(ProductsInOrder)

    async createProductInOrder(productInOrder: ProductsInOrderCreateDTO){
        await this.productsInOrderRepository.save(productInOrder)
        return productInOrder
    }

    async getAllProductsInOrder(){
        return await this.productsInOrderRepository.find()
    }

    async getProductInOrderById(id: number){
        return await this.productsInOrderRepository.findOneBy({productsInOrderId: id})
    }

    async updateProductInOrder(id: number, updatedInfo: ProductsInOrder){
        const productInOrderFinded = await this.productsInOrderRepository.findOneBy({productsInOrderId: id})
        if(!productInOrderFinded){
            throw new Error("Product in order not found")
        }

        const updatedProductInOrder = {...productInOrderFinded, ...updatedInfo}
        return await this.productsInOrderRepository.save(updatedProductInOrder)
    }

    async deleteProductInOrder(id: number){
        await this.productsInOrderRepository.delete({productsInOrderId: id})
    }

}