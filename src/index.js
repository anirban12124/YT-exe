import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config();

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error:", error);
        throw error;
    })
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`connect on port ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.error("Failed to connect database:", error.message);
    process.exit(1);
});