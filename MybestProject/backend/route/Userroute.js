

import express from "express"
import { AllUserData, UserAccountDelet, UserAccountUpdate, UserLogin, UserRegister } from "../controller/UserController.js";

const userRouter=express.Router();
 
userRouter.post("/register",UserRegister)
userRouter.post("/login",UserLogin)
userRouter.get("/users",AllUserData)
userRouter.delete("/delete/:id",UserAccountDelet)
userRouter.put("/update/:id",UserAccountUpdate)


export default userRouter;