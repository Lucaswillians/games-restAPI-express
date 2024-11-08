import express from 'express'
import connectingDatabase from './config/dbConnect.js'
import routes from './routes/index.js'

try {
  const connect = await connectingDatabase()
  connect.once('open', () => console.log('Show de bola!'))
}
catch {
  connect.on('error', (error) => console.error('Error conected', error))
}

const app = express()
routes(app)

export default app