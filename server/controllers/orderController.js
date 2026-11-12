import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

// Place Order
export const placeOrder = async (req, res) => {
  try {
    const { shippingAddress } = req.body;

    // Validate shipping address
    if (
      !shippingAddress?.fullName ||
      !shippingAddress?.phone ||
      !shippingAddress?.address ||
      !shippingAddress?.city ||
      !shippingAddress?.state ||
      !shippingAddress?.pincode
    ) {
      return res.status(400).json({
        success: false,
        message: "Complete shipping address is required",
      });
    }

    // Find logged-in user's cart
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.product");

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty",
      });
    }

    // Validate products and calculate total
    let totalAmount = 0;

    const orderProducts = [];

    for (const item of cart.products) {
      const product = item.product;

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "A product in your cart no longer exists",
        });
      }

      // Check available stock
      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `${product.name} is out of stock or has insufficient stock`,
        });
      }

      // Calculate price using database value
      const itemTotal = product.price * item.quantity;

      totalAmount += itemTotal;

      // Save product details in order
      orderProducts.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
      });
    }

    // Create new order
    const order = await Order.create({
      user: req.user._id,
      products: orderProducts,
      totalAmount,
      shippingAddress,
    });

    // Reduce product stock
    for (const item of cart.products) {
      await Product.findByIdAndUpdate(item.product._id, {
        $inc: {
          stock: -item.quantity,
        },
      });
    }

    // Empty user's cart
    cart.products = [];
    await cart.save();

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Place Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// Get My Orders
export const getMyOrders = async (req, res) => {
  try {
    // Find all orders of logged-in user
    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("products.product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      totalOrders: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get My Orders Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// Get Single Order
export const getSingleOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    }).populate("products.product");

    // Check if order exists
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order details fetched successfully",
      order,
    });
  } catch (error) {
    console.error("Get Single Order Error:", error);

    
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

