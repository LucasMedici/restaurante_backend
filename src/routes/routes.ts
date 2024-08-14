import { Router } from "express";
import useRouter from "./userRoutes";
import adressRouter from "./adressRoutes";
import productRouter from "./productRoutes";
import orderRouter from "./orderRoutes";
import buyRouter from "./buyRoutes";
import queueRouter from "./queueRoutes";

const router = Router();
router.use('/', useRouter);
router.use('/', adressRouter)
router.use('/', productRouter)
router.use('/', orderRouter)
router.use('/', buyRouter)
router.use('/', queueRouter)


export default router;