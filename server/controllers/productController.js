import mongoose from "mongoose";
import Product from "../models/productModel.js";

// Create Product Controller
export const createProduct = async (req, res) => {
  try {
    // Get product details from request body
    const {
      name,
      price,
      discountPercent,
      category,
      image,
      rating,
      stock,
      description,
    } = req.body;
    if (
      !name ||
      price === undefined ||
      !category ||
      !image ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create product in MongoDB
    const product = await Product.create({
      name,
      price,
      discountPercent,
      category,
      image,
      rating,
      stock,
      description,
    });

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// Get All Products API
export const getAllProducts = async (req, res) => {
  try {

    const products = await Product.find();

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      totalProducts: products.length,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// Get Single Product API
export const getSingleProduct = async (req, res) => {
  try {
    
    const { id } = req.params;

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    // Find product by ID
    const product = await Product.findById(id);

    // Check if product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    console.error("Get Single Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
