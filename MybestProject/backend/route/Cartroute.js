import express from "express"
import { CartApi, CartDec, CartInc, CartItem, ClearButton, RemoveItem } from "../controller/CartController.js";

const CartRouter=express.Router();

// cart product id and userid add
CartRouter.post("/additemcart",CartItem)
// view api
CartRouter.get("/view",CartApi)

// update api for deciment button
CartRouter.put("/dec/:id",CartDec)

// update api for incrimetn button
CartRouter.put("/inc/:id",CartInc)

// remove button
CartRouter.delete("/remove/:id",RemoveItem)

// clear button
CartRouter.delete("/clear",ClearButton)

export default CartRouter;