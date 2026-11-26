import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsApi, getSingleProductApi } from "../services/productApi";
import {
  setProducts,
  setSelectedProduct,
  setLoading,
  setError,
  setSearchQuery,
  setCategory,
  clearSelectedProduct,
  resetProductFilters,
} from "../Redux/productSlice";

// Normalize product list across response shapes
const extractProducts = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.products)) return data.products;
  if (Array.isArray(data?.data)) return data.data;
  return [];
};

// Custom hook for product listing, filtering, and single product lookup without thunks
export function useProducts() {
  const dispatch = useDispatch();
  const { items, selectedProduct, loading, error, searchQuery, category } =
    useSelector((state) => state.products);

  const loadProducts = useCallback(
    async (overrides = {}) => {
      const nextSearch =
        overrides.search !== undefined ? overrides.search : searchQuery;
      const nextCategory =
        overrides.category !== undefined ? overrides.category : category;

      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const data = await getAllProductsApi({
          search: nextSearch,
          category: nextCategory,
        });
        const list = extractProducts(data);
        dispatch(setProducts(list));
        return list;
      } catch (err) {
        const message =
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch products";
        dispatch(setError(message));
        return [];
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, searchQuery, category]
  );

  const loadSingleProduct = useCallback(
    async (id) => {
      if (!id) return null;

      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const data = await getSingleProductApi(id);
        const product = data?.product || data?.data || data;
        dispatch(setSelectedProduct(product));
        return product;
      } catch (err) {
        const message =
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch product details";
        dispatch(setError(message));
        return null;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  const changeSearch = useCallback(
    (value) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch]
  );

  const changeCategory = useCallback(
    (value) => {
      dispatch(setCategory(value));
      return loadProducts({ search: searchQuery, category: value });
    },
    [dispatch, loadProducts, searchQuery]
  );

  const clearFilters = useCallback(() => {
    dispatch(resetProductFilters());
    return loadProducts({ search: "", category: "" });
  }, [dispatch, loadProducts]);

  const resetSingleProduct = useCallback(() => {
    dispatch(clearSelectedProduct());
  }, [dispatch]);

  return {
    products: items,
    selectedProduct,
    loading,
    error,
    searchQuery,
    category,
    loadProducts,
    loadSingleProduct,
    changeSearch,
    changeCategory,
    clearFilters,
    resetSingleProduct,
  };
}