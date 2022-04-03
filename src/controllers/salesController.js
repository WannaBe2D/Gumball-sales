import db from "../db/db.js";
import ProductService from "../services/productService.js";
import SalesServices from "../services/salesServices.js";

class SalesController {
    async create(req, res) {
        try {
            const product = await SalesServices.create(req.body);
            return res.send(product)
        } catch (e) {
            return res.status(500);
        }
    }

    async getAll(req, res) {
        try {
            const products = await SalesServices.getAll()
            return res.send(products)
        } catch (e) {
            return res.status(500);
        }
    }
}

export default new SalesController()