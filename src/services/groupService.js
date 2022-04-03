import db from "../db/db.js";

class GroupService {
    async create(json) {
        await db.read()

        const { name } = json
        const group = { id: db.data.groups.length + 1, name: name}
        db.data.groups.push(group)

        await db.write()

        return group
    }

    async getAll() {
        await db.read()

        return db.data.groups
    }

    async removeByID(json) {
        await db.read()

        const { categoryID } = json

        db.data.groups = db.data.groups.filter(item => item.id !== categoryID)

        await db.write()
    }
}

export default new GroupService