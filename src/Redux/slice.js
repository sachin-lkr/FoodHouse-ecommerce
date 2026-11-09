import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      const item = state.find((product) => product.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    DecrementQty: (state, action) => {
      const item = state.find((product) => product.id === action.payload);
      if (item) {
        item.qty -= 1;
      }
    },
  },
});
export const { addItem, RemoveItems, IncrementQty, DecrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
