import "dotenv/config";
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("API is working well and good"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
