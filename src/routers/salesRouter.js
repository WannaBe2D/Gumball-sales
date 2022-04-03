import {Router} from "express";
import SalesController from "../controllers/salesController.js";

const router = new Router()

router.get('/', SalesController.getAll)

router.post('/', SalesController.create)

export default router