//require('dotenv').config({path: './env'})
import dotenv from "dotenv"


// import mongoose from "mongoose";
// import { DB_Name } from "./constants";


import connectDB from "./db/db.js";

dotenv.config({
    path: './env'
})


connectDB()




























/*
1st Method----
import express from "express"
const app=express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    app.on("error",(error)=> {
        console.log("ERROR: ",error);
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log("ERROR: ",error);
        throw error
    })

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
