import game from "../models/Game.js";
import { producer } from "../models/Producer.js";

export default class GameController {
  static async getGames (req, res) {
    try {
      const gameList = await game.find({})
      res.status(200).json(gameList) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
      console.error(error)
    }
  }

  static async postGames (req, res) {
    const newGame = req.body

    try {
      const producerFound = await producer.findById(newGame.producer)
      const gameComplete = { ...newGame, producer: { ...producerFound._doc } }
      const gameCreated = await game.create(gameComplete)

      res.status(201).json({ message: 'created with success', game: gameCreated })
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }

  static async getGameById (req, res) {
    try {
      const id = req.params.id
      const gameFound = await game.findById(id)
      res.status(200).json(gameFound) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }
  
  static async updateGame (req, res) {
    try {
      const id = req.params.id
      await game.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Updated with success' }) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }
  
  static async deleteGame (req, res) {
    try {
      const id = req.params.id
      await game.findByIdAndDelete(id)
      res.status(200).json({ message: 'Deleted with success' }) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }

  static async getGameByTitle (req, res) {
    const title = req.query.title

    try {
      const gamesByTitle = await game.find({ title: title })
      res.status(200).json(gamesByTitle)
    }
    catch (error) {
      res.status(500).json({ message: `${error.message} - req failed` })
    }
  }
}