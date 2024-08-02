import { Router } from "express";
import useRouter from "./userRoutes";
import adressRouter from "./adressRoutes";
import productRouter from "./productRoutes";
import orderRouter from "./orderRoutes";

const router = Router();
router.use('/', useRouter);
router.use('/', adressRouter)
router.use('/', productRouter)
router.use('/', orderRouter)



export default router;