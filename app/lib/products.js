import dbConnect from "../api/connecttodb";
import Product from "../api/Product";

import { sampleProducts } from "./sample-products";

export { sampleProducts };

export async function getProducts() {
  try {
    if (await dbConnect()) {
      const fromDb = await Product.find().lean();
      if (fromDb.length) return fromDb.map((p) => ({ ...p, _id: String(p._id) }));
    }
  } catch (error) {
    console.error("Error retrieving products:", error);
  }
  return sampleProducts;
}

export async function getProduct(id) {
  const products = await getProducts();
  return products.find((p) => p._id === id) || null;
}
