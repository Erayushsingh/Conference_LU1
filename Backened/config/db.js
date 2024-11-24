import mangoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  try {
    await mangoose.connect(process.env.DATABASE_URI);
    console.log("Database connected..");
  } catch (error) {
    handleError(error);
  }
};
