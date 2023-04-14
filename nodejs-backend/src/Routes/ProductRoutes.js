import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/product.model";
import { supplier, protect } from "../middleware/AuthMiddleware";

const productRoute = express.Router();

// admin get all products

productRoute.get(
  "/all",
  protect,
  supplier,
  asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 });
    res.json(products);
  })
);
