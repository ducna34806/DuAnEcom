import { Router } from "express";
import { createProduct } from "../controllers/Products/Create";
import { updateProductById } from "../controllers/Products/Edit";
import { getAllProducts, getProductById } from "../controllers/Products/Get";
import {
  deleteProductById,
  destroy_delete,
} from "../controllers/Products/Remove";
import { restore_item } from "../controllers/Products/Recycle";
const Routes_Products = Router();
Routes_Products.get("/products", getAllProducts);
Routes_Products.get("/products/:id", getProductById);
Routes_Products.delete("/products/:id", destroy_delete);
Routes_Products.put("/products/:id", updateProductById);
Routes_Products.patch("/products/:id", restore_item);
Routes_Products.post("/products", createProduct);

export default Routes_Products;
