import express from "express";
import {protect }from "../middleware/authMiddleware.js"
import { registerUser, loginUser,getProfile,logoutUser } from "../controllers/authController.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/profile", protect, getProfile);

// Logout route
router.post("/logout", logoutUser);

export default router;
