import express from "express";
import { addToCart,getCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected route
router.post("/add", protect, addToCart);

// Get Cart
router.get("/", protect, getCart);

export default router;