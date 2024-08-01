import ProductService from "../services/productService";
import { Request, Response } from "express";

const productService = new ProductService()

export class ProductController{

    public async createProduct(req: Request, res: Response){
        try{
            const newProduct = await productService.createProduct(req.body)
            return res.status(201).json(newProduct)
        }catch(error){
            res.status(500).json(error)
        }
    }


    
    public async getAllProducts(req: Request, res: Response){
        try{
            const products = await productService.getAllProduct()
            return res.status(200).json(products)
        }catch(error){
            res.status(500).json(error)
        }
    }


    public async getProductById(req: Request, res: Response) {
        try{
            const productId = parseInt(req.params.id)
            const product = await productService.getProductById(productId)

            if(!product){
                return res.status(404).json({message: 'Product not found'})
            }
            return res.status(200).json(product)

        }catch(error){
            res.status(500).json(error)
        }
    }


    public async updateProduct(req: Request, res: Response){
        try{
            const productId = parseInt(req.params.id)
            const updatedInfo = req.body

            const product = await productService.getProductById(productId)
            if(!product){
                return res.status(404).json({message: 'Product not found'})
            }

            await productService.updateProduct(productId, updatedInfo)
            return res.status(200).json({message: 'Product updated'})
        }catch(error){
            res.status(500).json(error)
        }
    }


    
    public async deleteProduct(req: Request, res: Response){
        try{
            const productId = parseInt(req.params.id)
            const product = await productService.getProductById(productId)

            
            if(!product){
                return res.status(404).json({message: 'Product not found'})
            }

            await productService.deleteProduct(productId)
            return res.status(200).json({message: 'Product deleted'})

        }catch(error){
            res.status(500).json(error)
        }
    }


}