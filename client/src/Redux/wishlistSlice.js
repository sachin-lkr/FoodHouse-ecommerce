import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    AddWishlist: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);

      if (!item) {
        state.push(action.payload);
      }
    },

    RemoveWishlist: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { AddWishlist, RemoveWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;