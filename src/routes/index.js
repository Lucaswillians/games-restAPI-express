import express from 'express'
import games from './gamesRoutes.js'
import producer from './producerRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Node com express'))

  app.use(express.json(), games, producer)
}

export default routes