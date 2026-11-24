import dbConnect from "../connecttodb";
import Product from "../Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    
    const products = await Product.find(); // Exclude _id, __v, and image data
    
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return NextResponse.error("Failed to retrieve products", 500); // Use a valid status code (500 for Internal Server Error)
  }
}
