import express from 'express'
import ProducerController from '../controllers/producerController.js'

const routes = express.Router()

routes.get('/producer', ProducerController.getProducer)
routes.get('/producer/:id', ProducerController.getProducerById)
routes.post('/producer', ProducerController.postProducer)
routes.put('/producer/:id', ProducerController.updateProducer)
routes.delete('/producer/:id', ProducerController.deleteProducer)

export default routes