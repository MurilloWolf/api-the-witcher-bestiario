
import { Router } from 'express'
import MonsterController from './controllers/MonsterController'
const routes = Router()

routes.get('/', MonsterController.index)
routes.post('/', MonsterController.store)
routes.get('/backdoor', (req, res) => { res.json({ ok: true }) })
export default routes