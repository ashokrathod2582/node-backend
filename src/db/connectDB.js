import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      "MONGO DB connected!! DB host: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MongoDB connection failed: ", error);
    process.exit(1);
  }
};
