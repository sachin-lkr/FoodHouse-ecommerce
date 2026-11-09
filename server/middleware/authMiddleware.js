
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Authentication Middleware
export const protect = async (req, res, next) => {
  try {
    
    const token = req.cookies.token;

    // Check token availability
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Please login.",
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find logged-in user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    // Store user data in request
    req.user = user;

    // Allow next middleware/controller
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};
