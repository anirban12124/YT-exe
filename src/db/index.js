import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try{
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in environment variables");
        }

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected:${connectionInstance.connection.host}`);
        
    }
    catch(error)
    {
        console.log("Connection error", error);
        throw error;
    }
}

export default connectDB






// import express from "express"
// const app=express();

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", ()=>{
//             console.log("ERROR", error)
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=>
//         {
//             console.log(`App is listening ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("ERROR: ", error)
//         throw error
//     }

// })()
