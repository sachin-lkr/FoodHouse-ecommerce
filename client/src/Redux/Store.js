import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slice"
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    
  },
})