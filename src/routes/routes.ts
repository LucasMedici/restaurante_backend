import { Router } from "express";
import useRouter from "./userRoutes";


const router = Router();
router.use('/', useRouter);



export default router;