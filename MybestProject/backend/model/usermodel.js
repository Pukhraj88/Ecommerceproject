import mongoose from "mongoose";

const userschema=mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique: true,
    },
    phone:String,
    address:String,
    password:String,
    confirmPassword:String,
})

const usermodel=mongoose.model("users",userschema)

export default usermodel; 