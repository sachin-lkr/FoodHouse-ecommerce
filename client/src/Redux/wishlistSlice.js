import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    AddWishlist: (state, action) => {
      const item = state.find((p) => p._id === action.payload._id);

      if (!item) {
        state.push(action.payload);
      }
    },

    RemoveWishlist: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    ClearWishlist: () => {
      return [];
    },
  }
});

export const { AddWishlist, RemoveWishlist ,ClearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;