import express from "express";
import { placeOrder } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Place Order
router.post("/place", protect, placeOrder);

export default router;
