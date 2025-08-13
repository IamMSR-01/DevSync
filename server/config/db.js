import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongodb_url = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${mongodb_url}/${DB_NAME}`)
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)
        process.exit(1);
    }
}

export default connectDB;