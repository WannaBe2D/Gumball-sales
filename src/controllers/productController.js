import ProductService from "../services/productService.js";

class ProductController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body);
            return res.send(product)
        } catch (e) {
            return res.status(500);
        }
    }

    async getByCategoryID(req, res) {
        try {
            const products = await ProductService.getByCategoryID(req.params);
            return res.send(products)
        } catch (e) {
            return res.status(500);
        }
    }

    async delete(req, res) {
        try {
            await ProductService.getByCategoryID(req.body);
            return res.status(200)
        } catch (e) {
            return res.status(500);
        }
    }

}

export default new ProductController()