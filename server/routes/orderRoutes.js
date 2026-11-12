import express from "express";
import { placeOrder, getMyOrders, getSingleOrder,} from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Place Order
router.post("/place", protect, placeOrder);

// Get My Orders
router.get("/my-orders", protect, getMyOrders);

// Get Single Order
router.get("/:orderId", protect, getSingleOrder);

export default router;
