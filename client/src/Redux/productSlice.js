import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
    error: null,
    searchQuery: "",
    category: "",
  },
  reducers: {
    // Store fetched products list
    setProducts: (state, action) => {
      state.items = Array.isArray(action.payload) ? action.payload : [];
    },
    // Store single product detail
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    // Toggle loading indicator
    setLoading: (state, action) => {
      state.loading = Boolean(action.payload);
    },
    // Store or clear error message
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Update search query text
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    // Update active category filter
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    // Clear selected single product
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    // Reset search and category filters
    resetProductFilters: (state) => {
      state.searchQuery = "";
      state.category = "";
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  setLoading,
  setError,
  setSearchQuery,
  setCategory,
  clearSelectedProduct,
  resetProductFilters,
} = productSlice.actions;

export default productSlice.reducer;
