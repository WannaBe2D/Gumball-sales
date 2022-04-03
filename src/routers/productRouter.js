import {Router} from "express";
import ProductController from "../controllers/productController.js";

const router = new Router()

router.get('/:categoryID', ProductController.getByCategoryID);

router.post('/', ProductController.create);

router.delete('/', ProductController.delete);

export default router