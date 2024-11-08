import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const connectingDatabase = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING)

  return mongoose.connection
}

export default connectingDatabase
