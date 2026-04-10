import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config();

connectDB().catch((error) => {
    console.error("Failed to connect database:", error.message);
    process.exit(1);
});