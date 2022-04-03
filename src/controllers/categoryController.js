import CategoryService from "../services/categoryService.js";

class CategoryController {
    async create(req, res) {
        try {
            const category = await CategoryService.create(req.body);
            return res.send(category);
        } catch (e) {
            return res.status(500);
        }
    }

    async getByGroupID(req, res) {
        try {
            const category = await CategoryService.getByGroupID(req.params);
            return res.send(category);
        } catch (e) {
            return res.status(500);
        }
    }
}

export default new CategoryController