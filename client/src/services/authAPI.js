import api from "../api/axios.js";
export async function register({ name, email, password }) {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log("register error:", err.response?.data || err.message);
    throw err;
  }
}

export async function login({ email, password }) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log("login error:", err.response?.data || err.message);
    throw err;
  }
}

export async function logout() {
  try {
    const response = await api.post("/auth/logout");

    return response.data;
  } catch (err) {
    console.log("logout error:", err.response?.data || err.message);
    throw err;
  }
}

export async function profile() {
  try {
    const response = await api.get("/auth/profile");

    return response.data;
  } catch (err) {
    console.log("profile error:", err.response?.data || err.message);
    throw err;
  }
}
