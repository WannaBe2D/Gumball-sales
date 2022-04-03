import db from "../db/db.js";

class CategoryService {
    async create(json) {
        await db.read()

        const { name, groupID } = json

        const category = { id: db.data.category.length + 1, name: name,
            groupID: groupID || null }

        db.data.category.push(category)

        await db.write()

        return category
    }

    async getByGroupID(json) {
        await db.read()

        const { categoryID } = json

        return db.data.category.filter(item => item.groupID === Number(categoryID))
    }
}

export default new CategoryService