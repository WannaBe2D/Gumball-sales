import GroupService from "../services/groupService.js";

class GroupController {
    async create(req, res) {
        try {
            const group = await GroupService.create(req.body)
            return res.send(group)
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const groups = await GroupService.getAll()
            return res.send(groups)
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

export default new GroupController()