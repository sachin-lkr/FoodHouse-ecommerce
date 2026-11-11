import express from "express";
import { addToCart,getCart,updateCartQuantity ,removeFromCart} from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected route
router.post("/add", protect, addToCart);

// Get Cart
router.get("/", protect, getCart);

// Update Cart Quantity
router.put("/update", protect, updateCartQuantity);

// Remove Item from Cart
router.delete("/remove", protect, removeFromCart);

export default router;