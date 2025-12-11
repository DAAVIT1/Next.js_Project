import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    // Reuse existing connection when available
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const mongoUri = process.env.MONGO || process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("Mongo connection string missing (set MONGO env var)");
    }

    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
