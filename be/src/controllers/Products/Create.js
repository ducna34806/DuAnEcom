// services/product.ts
import Products from "../../models/Items/Products";

export const createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
