import { dbConfig } from "../config/dbConfig";
import { Product } from "../models/productModel";

export default class ProductService{
    private productRepository = dbConfig.getRepository(Product)

    async createProduct(product: Product) {
        await this.productRepository.save(product)
        return product;
    }

    async getAllProduct(){
        return await this.productRepository.find()
    }

    async getProductById(id: number){
        return await this.productRepository.findOneBy({product_id: id})
    }

    async updateProduct(id: number, updatedInfo: Product) {
        const productFinded = await this.productRepository.findOneBy({product_id: id})
        if(!productFinded){
            throw new Error("Product not found")
        }

        const updatedProduct = {...productFinded, ...updatedInfo}
        return await this.productRepository.save(updatedProduct)

    }

    async deleteProduct(id: number){
        await this.productRepository.delete({product_id: id})
    }
}