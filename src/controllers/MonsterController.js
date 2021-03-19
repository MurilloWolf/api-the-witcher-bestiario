import "@babel/polyfill";
import Monster from '../models/Monster'
class MonsterController {
    async store(request, response) {
        try {

            const { name, otherNames, description, image, ocurrences,
                weakness, drops, missions, type } = request.body;

            const relatedMissions = missions.length > 0 ? missions : 'Desconhecido'

            const newMonster = {
                name,
                type,
                otherNames,
                description,
                image,
                ocurrences,
                weakness,
                missions: relatedMissions,
                drops
            }
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