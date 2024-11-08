import mongoose from "mongoose"
import { producerSchema } from "./Producer.js"

const gameSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: mongoose.Schema.Types.String, required: true },
  price: { type: mongoose.Schema.Types.Number },
  time: { type: mongoose.Schema.Types.Number },
  producer: producerSchema
}, { versionKey: false })

const game = mongoose.model('games', gameSchema)

export default game