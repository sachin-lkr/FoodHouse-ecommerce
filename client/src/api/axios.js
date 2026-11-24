import axios from "axios";

// Axios instance for all backend API requests
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials:true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;