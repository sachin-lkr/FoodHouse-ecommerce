import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartApi,addToCartApi, updateCartQuantityApi,removeFromCartApi,} from "../services/cartAPI.js";
import { setCartItems,clearCartItems,normalizeCartItems,} from "../Redux/cartSlice.js";

export function useCart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCartApi();
      const normalized = normalizeCartItems(data);
      dispatch(setCartItems(normalized));
      setLoading(false);
      return { success: true, data: normalized };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Failed to fetch cart.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    }
  };

  const handleAddToCart = async ({ productId, quantity = 1 }) => {
    setLoading(true);
    setError(null);
    try {
      await addToCartApi({ productId, quantity });
      const data = await getCartApi();
      const normalized = normalizeCartItems(data);
      dispatch(setCartItems(normalized));
      setLoading(false);
      return { success: true, data: normalized };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Failed to add item.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    }
  };

  const handleUpdateQuantity = async ({ productId, quantity }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await updateCartQuantityApi({ productId, quantity });
      const normalized = normalizeCartItems(data);
      dispatch(setCartItems(normalized));
      setLoading(false);
      return { success: true, data: normalized };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Failed to update qty.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    }
  };

  const handleRemoveItem = async ({ productId }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await removeFromCartApi({ productId });
      const normalized = normalizeCartItems(data);
      dispatch(setCartItems(normalized));
      setLoading(false);
      return { success: true, data: normalized };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Failed to remove item.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    }
  };

  const handleClearCart = () => {
    dispatch(clearCartItems());
    setError(null);
  };

  return {
    items,
    loading,
    error,
    handleGetCart,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
    handleClearCart,
  };
}