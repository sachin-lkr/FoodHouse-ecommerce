import api from "../api/axios";

export async function getAllProductsApi({ search, category } = {}) {
  try {
    const params = {};

    if (search && search.trim()) {
      params.search = search.trim();
    }

    if (category && category.trim()) {
      params.category = category.trim();
    }

    const response = await api.get("/products", { params });
    return response.data;
  } catch (err) {
    console.error("getAllProductsApi error:", err.response?.data || err.message);
    throw err;
  }
}

// Fetch single product details by MongoDB ID
export async function getSingleProductApi(id) {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (err) {
    console.error("getSingleProductApi error:", err.response?.data || err.message);
    throw err;
  }
}