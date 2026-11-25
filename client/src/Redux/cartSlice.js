import { createSlice } from "@reduxjs/toolkit";

// Normalize backend cart.products into a consistent frontend item shape
export const normalizeCartItems = (data) => {
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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    clearCartItems: (state) => {
      state.items = [];
    },
  },
});

export const { setCartItems, clearCartItems } = cartSlice.actions;;
export default cartSlice.reducer;