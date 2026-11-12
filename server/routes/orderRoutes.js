import express from "express";
import { placeOrder, getMyOrders, getSingleOrder,cancelOrder,} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Place Order
router.post("/place", protect, placeOrder);

// Get My Orders
router.get("/my-orders", protect, getMyOrders);

// Get Single Order
router.get("/:orderId", protect, getSingleOrder);

// Cancel Order
router.put("/cancel/:orderId", protect, cancelOrder);

export default router;
