import {Router} from "express";
import CategoryController from "../controllers/categoryController.js";

const router = new Router()

router.get('/:categoryID', CategoryController.getByGroupID);
router.post('/', CategoryController.create);

export default router