import mongoose from "mongoose"

const producerSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true},
  nationality: { type: String }
}, { versionKey: false })

const producer = mongoose.model('producers', producerSchema)

export { producer, producerSchema }