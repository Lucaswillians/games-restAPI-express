import { producer } from "../models/Producer.js"

export default class ProducerController {
  static async getProducer (req, res) {
    try {
      const producerList = await producer.find({})
      res.status(200).json(producerList) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }

  static async postProducer (req, res) {
    try {
      const newproducer = await producer.create(req.body)
      res.status(201).json({ message: 'created with success', producer: newproducer })
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }

  static async getProducerById (req, res) {
    try {
      const id = req.params.id
      const producerFound = await producer.findById(id)
      res.status(200).json(producerFound) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }
  
  static async updateProducer (req, res) {
    try {
      const id = req.params.id
      await producer.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Updated with success' }) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }
  
  static async deleteProducer (req, res) {
    try {
      const id = req.params.id
      await producer.findByIdAndDelete(id)
      res.status(200).json({ message: 'Deleted with success' }) 
    }
    catch (error) {
      res.status(500).json({ message: `${erro.message} - req failed` })
    }
  }
}