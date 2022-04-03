import ProductService from "./productService.js";
import db from "../db/db.js";

class SalesServices {
    async create(json) {
        await db.read()

        const { id } = json

        const item = db.data.products.find(item => item.id === id)

        item['count'] = item['count'] - 1
        if(item['count'] <=0) {
            await ProductService.delete(item)
        }

        const saleItem = {id: item.id, name: item.name, price: item.price,
            categoryID: item.categoryID, date: new Date() }

        db.data.sales.push(saleItem)

        await db.write()

        return saleItem
    }

    async getAll() {
        await db.read()

        return db.data.sales
    }
}

export default new SalesServices