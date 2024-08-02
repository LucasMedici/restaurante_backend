import { Router } from "express";
import useRouter from "./userRoutes";
import adressRouter from "./adressRoutes";
import productRouter from "./productRoutes";
import orderRouter from "./orderRoutes";
import buyRouter from "./buyRoutes";

const router = Router();
router.use('/', useRouter);
router.use('/', adressRouter)
router.use('/', productRouter)
router.use('/', orderRouter)
router.use('/', buyRouter)


export default router;