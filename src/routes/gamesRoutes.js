import express from 'express'
import GameController from '../controllers/gameController.js'

const routes = express.Router()

routes.get('/games', GameController.getGames)
routes.get('/games/busca', GameController.getGameByTitle)
routes.get('/games/:id', GameController.getGameById)
routes.post('/games', GameController.postGames)
routes.put('/games/:id', GameController.updateGame)
routes.delete('/games/:id', GameController.deleteGame)

export default routes