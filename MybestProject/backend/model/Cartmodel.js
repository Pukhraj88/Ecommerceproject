import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products", 
  },
   userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
  },
  quantity: {
    type: Number,
    default: 1,
  },
});
const cartModel = mongoose.model("carts", cartSchema);
export default cartModel;
