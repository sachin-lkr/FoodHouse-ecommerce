import api from "../api/axios.js";

// Fetch authenticated user's cart
export async function getCartApi() {
  try {
    const response = await api.get("/cart");
    return response.data;
  } catch (err) {
    console.log("getCart error:", err.response?.data || err.message);
    throw err;
  }
}

// Add product to cart
export async function addToCartApi({ productId, quantity = 1 }) {
  try {
    const response = await api.post("/cart/add", {
      productId,
      quantity: Number(quantity),
    });
    return response.data;
  } catch (err) {
    console.log("addToCart error:", err.response?.data || err.message);
    throw err;
  }
}

// Update product quantity in cart
export async function updateCartQuantityApi({ productId, quantity }) {
  try {
    const response = await api.put("/cart/update", {
      productId,
      quantity: Number(quantity),
    });
    return response.data;
  } catch (err) {
    console.log("updateCartQuantity error:", err.response?.data || err.message);
    throw err;
  }
}

// Remove product from cart
export async function removeFromCartApi({ productId }) {
  try {
    const response = await api.delete("/cart/remove", {
      data: { productId },
    });
    return response.data;
  } catch (err) {
    console.log("removeFromCart error:", err.response?.data || err.message);
    throw err;
  }
}