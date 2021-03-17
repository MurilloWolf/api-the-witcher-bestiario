import Monster from '../models/Monster'
class MonsterController {
    async store(request, response) {
        try {

            const { name } = request.body;
            const newMonster = { id: Math.random().toString(), name }
            const result = await Monster.create(newMonster)
            return response.status(201).json(result)
        }
        catch (err) {
            return response.status(500).json(err);
        }
    }
    async index(request, response) {
        try {

            const result = await Monster.find();
            return response.status(201).json(result)
        }
        catch (err) {
            return response.status(500).json(err);
        }
    }

}
export default new MonsterController()