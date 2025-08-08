import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./route/Userroute.js";
import ProductRouter from "./route/Productroute.js";
import bodyParser from "body-parser";
import CartRouter from "./route/Cartroute.js";
dotenv.config();
const app=express();   

// Increase the limit for JSON and urlencoded payloads
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors()); 
app.use(express.json())  

//   DATA BASE CONNECTION
const DBURL = process.env.DB || "mongodb+srv://kumarpukhraj905:xxxxxxx@pukhraj.eyl5y.mongodb.net/demo2?retryWrites=true&w=majority&appName=pukhraj/";

const DataBase = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("DB connected ");
  } catch (err) {
    console.log(err);
  }
};
DataBase();   
  
// ROUTE USER LOGIN REGISTER 
app.use("/api",userRouter)
   

//ADMIN ADD PRODUCT VIEW FETCH PRODUCT
app.use("/api/admin",ProductRouter)

// ADD TO CART FUNTIONLITY
app.use("/api/cart",CartRouter)



 
app.listen(process.env.PORT,()=>{
    console.log("PORT listening 8000")
})  