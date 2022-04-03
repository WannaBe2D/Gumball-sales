import {Router} from "express";
import GroupController from "../controllers/groupController.js";

const router = new Router()

router.get("/", GroupController.getAll)
router.post('/', GroupController.create);

export default router