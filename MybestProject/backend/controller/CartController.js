import cartModel from "../model/Cartmodel.js";

// PRODUCT ID AND USEER ID STORE TO CART AFTER BUY BUTTON CLICKED
// export const CartItem = async (req, res) => {
//   try {
//     const { productid, userid, quantity = 1 } = req.body;
//     const cartItem = await cartModel.create({
//       productid,
//       userid,
//       quantity,
//     });
//     const populatedItem = await cartModel
//       .findById(cartItem._id)
//       .populate("productid")
//       .populate("userid");
//     res.send({
//       status: 0,
//       msg: "Cart Item Added Successfully",
//       response: populatedItem,
//     });
//   } catch (error) {
//     res.status(500).send({
//       status: 1,
//       msg: "Something went wrong",
//       error: error.message,
//     });
//   }
// };
export const CartItem = async (req, res) => {
  try {
    const { productid, userid, quantity = 1 } = req.body;
    const existingItem = await cartModel.findOne({ productid, userid });
    let updatedItem;
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      updatedItem = await cartModel
        .findById(existingItem._id)
        .populate("productid")
        .populate("userid");
    } else {
      const newItem = await cartModel.create({ productid, userid, quantity });
      updatedItem = await cartModel
        .findById(newItem._id)
        .populate("productid")
        .populate("userid");
    }
    res.send({
      status: 0,
      msg: "Cart Item Added/Updated Successfully",
      response: updatedItem,
    });
  } catch (error) {
    res.status(500).send({
      status: 1,
      msg: "Something went wrong",
      error: error.message,
    });
  }
};


// FETCHING API FOR CART
export const CartApi = async (req, res) => {
  const response = await cartModel
    .find()
    .populate("productid")
    .populate("userid");
  res.send({
    status: 0,
    msg: "User Fetch Successfully",
    response,
  });
};

// Decriment button update
export const CartDec = async (req, res) => {
  const { id } = req.params;
  const { tokenid } = req.body;
  const response = await cartModel.updateOne(
    { productid: id, userid: tokenid },
    { $inc: { quantity: -1 } }
  );
  res.send({
    status: 0,
    msg: "Value Decriment Successfully",
    response,
  });
};

// Incrimetn button update
export const CartInc = async (req, res) => {
  const { id } = req.params;
  const { tokenid } = req.body;
  const response = await cartModel.updateOne(
    { productid: id, userid: tokenid },
    { $inc: { quantity: 1 } }
  );
  res.send({
    status: 0,
    msg: "Value Incriment Successfully",
    response,
  });
};


// Remove button
export const RemoveItem = async (req, res) => {
  const { id } = req.params;
  const { tokenid } = req.body;
  const response = await cartModel.deleteOne({productid: id,
      userid: tokenid});
  res.send({
    status: 0,
    msg: "Remove Item Successfully",
    response,
  });
};
 

// Clear button
export const ClearButton = async (req, res) => {
  const { tokenid } = req.body;
  console.log(tokenid)
  const response = await cartModel.deleteMany({userid: tokenid });
  res.send({
    status: 0,
    msg: "Clear Cart Successfully",
    response,
  });
};