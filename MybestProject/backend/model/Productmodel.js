import mongoose from "mongoose";

const productschema=mongoose.Schema({
     image:{ 
        type:String
    },
    name:String,
    price:String,
    details:String,
    description:String,
    rating:String,
    category:String,
     
    
})

const productmodel=mongoose.model("products",productschema)

export default productmodel; 