import productmodel from "../model/Productmodel.js";

// ADD PRODUCT
export const AddProduct = async (req, res) => {
  const { name, price, image, details, description, rating, category } =
    req.body;
  const response = await productmodel.insertOne({
    image,
    name,
    price,
    details,
    description,
    rating,
    category,
  });
  res.send({
    status: 0,
    msg: "Product Saved Successfully",
    response,
  });
};

// VIEW PRODUCTS
export const ProductList = async (req, res) => {
  const response = await productmodel.find();
  res.send({
    status: 0,
    msg: "Product Saved Successfully",
    response,
  });
};

// EDIT PRODUCT
export const PrdoductUpdate = async (req, res) => {
  const id = req.params._id;
  const formData = req.body;
  const response = await productmodel.updateOne(
    { _id: id },
    { $set: formData }
  );
  res.send({ status: 0, msg: "Product Edited Sucessfully", response });
};

// signle product fetch for updating
export const SingleProductView = async (req, res) => {
  const id = req.params.id;
  const response = await productmodel.find({ _id: id });
  res.send({ status: 0, msg: "Product Fetch Sucessfully", response });
};

// DELET PRODUCT
export const ProductDelet = async (req, res) => {
  const id = req.params.id;
  const response = await productmodel.deleteOne({ _id: id });
  res.send({ status: 0, msg: "Product Delet Sucessfully", response });
};
