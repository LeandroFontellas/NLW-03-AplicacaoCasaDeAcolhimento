import {Router} from 'express'
import OrphanagesController from './controllers/OrphanagesController'
import multer from 'multer'
import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages',OrphanagesController.index)//lista todos os orfanatos
routes.post('/orphanages',upload.array('images'),OrphanagesController.create)//cria orfanato
routes.get('/orphanages/:id',OrphanagesController.show)//lista todos os orfanatos

export default routes

