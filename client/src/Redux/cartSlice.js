import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// Normalize backend cart.products into a consistent frontend item shape
const normalizeCartItems = (data) => {
  const rawProducts = data?.cart?.products || data?.products || [];

  return rawProducts.map((entry) => {
    const productDoc =
      entry?.product && typeof entry.product === "object" ? entry.product : null;
    const productId = productDoc?._id || entry?.product || entry?.productId;

    return {
      _id: entry?._id || productId,
      productId,
      name: productDoc?.name || entry?.name || "",
      image: productDoc?.image || entry?.image || "",
      price: Number(productDoc?.price ?? entry?.price ?? 0),
      stock: productDoc?.stock ?? entry?.stock,
      quantity: Number(entry?.quantity ?? 1),
    };
  });
};

// Fetch authenticated user's cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/cart");
      return normalizeCartItems(response.data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cart"
      );
    }
  }
);

// Add product to cart (requires authenticated user)
export const addToCartBackend = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity = 1 }, { dispatch, rejectWithValue }) => {
    try {
      await axios.post("/cart/add", {
        productId,
        quantity: Number(quantity),
      });
      // Fetch populated cart so product details (name, image, price) are available
      const refreshedCart = await dispatch(fetchCart()).unwrap();
      return refreshedCart;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add product to cart"
      );
    }
  }
);

// Update product quantity in backend cart
export const updateCartQtyBackend = createAsyncThunk(
  "cart/updateQty",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put("/cart/update", {
        productId,
        quantity: Number(quantity),
      });
      return normalizeCartItems(response.data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update quantity"
      );
    }
  }
);

// Remove product from backend cart
export const removeCartItemBackend = createAsyncThunk(
  "cart/removeItem",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete("/cart/remove", {
        data: { productId },
      });
      return normalizeCartItems(response.data);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item from cart"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Clear cart state on logout
    clearCartState: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add to cart
      .addCase(addToCartBackend.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCartBackend.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Update quantity
      .addCase(updateCartQtyBackend.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(updateCartQtyBackend.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Remove item
      .addCase(removeCartItemBackend.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeCartItemBackend.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearCartState } = cartSlice.actions;
export default cartSlice.reducer;