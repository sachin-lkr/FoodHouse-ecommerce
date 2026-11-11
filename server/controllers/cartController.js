import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// Add Product to Cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

 
    if (!productId || !Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Valid product ID and quantity are required",
      });
    }

    
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check available stock
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient stock",
      });
    }

 
    let cart = await Cart.findOne({ user: req.user._id });

   
    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        products: [{ product: productId, quantity }],
      });
    } else {
      //  product is already in cart
      const existingItem = cart.products.find(
        (item) => item.product.toString() === productId
      );

      if (existingItem) {
        // Increase  quantity
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity > product.stock) {
          return res.status(400).json({
            success: false,
            message: "Requested quantity exceeds available stock",
          });
        }

        existingItem.quantity = newQuantity;
      } else {
        cart.products.push({
          product: productId,
          quantity,
        });
      }

      await cart.save();
    }

    return res.status(200).json({
      success: true,
      message: "Product added to cart successfully",
      cart,
    });
  } catch (error) {
    console.error("Add to Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// Get  Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.product");

    // Cart not found
    if (!cart) {
      return res.status(200).json({
        success: true,
        message: "Cart is empty",
        cart: {
          products: [],
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cart,
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// Update Cart Product Quantity
export const updateCartQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    
    if (!productId || !Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Valid product ID and quantity are required",
      });
    }

    // Find user's cart
    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    // Find product in cart
    const cartItem = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds available stock",
      });
    }

    // Update quantity
    cartItem.quantity = quantity;

    await cart.save();

    // Fetch updated cart with product details
    const updatedCart = await Cart.findById(cart._id)
      .populate("products.product");

    return res.status(200).json({
      success: true,
      message: "Cart quantity updated successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Update Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// Remove Item from Cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;

   
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    //  logged-in user's 
    const cart = await Cart.findOne({
      user: req.user._id,
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    // Check product exists in cart
    const productExists = cart.products.some(
      (item) => item.product.toString() === productId
    );

    if (!productExists) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    // Remove  product 
    cart.products = cart.products.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();

    const updatedCart = await Cart.findById(cart._id)
      .populate("products.product");

    return res.status(200).json({
      success: true,
      message: "Product removed from cart successfully",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Remove Cart Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
