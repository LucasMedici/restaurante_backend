import { Router } from "express";
import useRouter from "./userRoutes";
import adressRouter from "./adressRoutes";
import productRouter from "./productRoutes";

const router = Router();
router.use('/', useRouter);
router.use('/', adressRouter)
router.use('/', productRouter)



export default router;