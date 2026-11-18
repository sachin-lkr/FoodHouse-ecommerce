import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slice"
import wishlistReducer from "./wishlistSlice";
import productReducer from "./productSlice";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
    auth: authReducer,
    
  },
})