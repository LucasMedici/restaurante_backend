import { Router } from "express";
import { ProductController } from "../controllers/productController";


const productRouter = Router();
const productController = new ProductController();

productRouter.post('/product', productController.createProduct);
productRouter.get('/products', productController.getAllProducts);
productRouter.get('/product/:id', productController.getProductById);
productRouter.put('/product/:id', productController.updateProduct);
productRouter.delete('/product/:id', productController.deleteProduct);


export default productRouter