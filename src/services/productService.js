import db from "../db/db.js";

class ProductService {
    async create(json) {
        await db.read()

        const { name, price, count, categoryID }= json

        const product = { id: db.data.products.length + 1, name: name,
            price: Number(price) || 100, count: count || 1,
            categoryID: Number(categoryID) || null}
        db.data.products.push(product)

        await db.write()

        return product
    }

    async getByCategoryID(json) {
        await db.read()

        const { categoryID } = json

        return db.data.products.filter(item => item.categoryID === Number(categoryID))
    }

    async delete(json) {
        await db.read()

        const { id } = json
        db.data.products = db.data.products.filter(item => item.id !== id)

        await db.write()
    }
}

export default new ProductService