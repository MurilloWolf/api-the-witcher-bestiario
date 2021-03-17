
import { Router } from 'express'
import MonsterController from './controllers/MonsterController'
const routes = Router()

routes.get('/', MonsterController.index)

routes.post('/', MonsterController.store)
export default routes