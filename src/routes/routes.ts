import { Router } from "express";
import useRouter from "./userRoutes";
import adressRouter from "./adressRoutes";


const router = Router();
router.use('/', useRouter);
router.use('/', adressRouter)



export default router;