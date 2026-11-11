import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(cookieParser());

// Health API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FoodHouse Backend is running!",
  });
});


// Authentication routes
app.use("/api/v1/auth", authRoutes);

// Product routes
app.use("/api/v1/products", productRoutes);

// Cart Routes
app.use("/api/v1/cart", cartRoutes);

//Order Routes
app.use("/api/v1/order", orderRoutes);

// Start server after database connection
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
