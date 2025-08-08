import express from "express";
import {
  AddProduct,
  PrdoductUpdate,
  ProductDelet,
  ProductList,
  SingleProductView,
} from "../controller/ProductController.js";

const ProductRouter = express.Router();

ProductRouter.post("/addproduct", AddProduct);
ProductRouter.get("/productlist", ProductList);

// delet product api
ProductRouter.delete("/delete/:id", ProductDelet);

// edit product
ProductRouter.get("/view/:id", SingleProductView);
ProductRouter.put("/edit/:_id", PrdoductUpdate);

export default ProductRouter;
