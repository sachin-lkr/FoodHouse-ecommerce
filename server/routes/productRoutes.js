import express from "express";

import {createProduct,getAllProducts, getSingleProduct,} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getAllProducts);

// Get single product
router.get("/:id", getSingleProduct);

// Create product
router.post("/", createProduct);

export default router;