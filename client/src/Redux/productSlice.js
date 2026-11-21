import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

// API call using Async Thunk
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async ({ category, search } = {}, { rejectWithValue }) => {
    try {
      // Create query parameters
      const params = {};
      // Add category if available
      if (category) {
        params.category = category;
      }
      // Add search if available
      if (search) {
        params.search = search;
      }

      const response = await axios.get("/products", {
        params,
      });
      return response.data.products || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch products",
      );
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: "",
    category: "",
  },
  reducers: {
    // Update search input value
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    // Update selected category
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setSearchQuery, setCategory } = productSlice.actions;
export default productSlice.reducer;
