import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login as loginApi,logout as logoutApi, register as registerApi,} from "../services/authAPI.js"; 
import { setUserInfo, logout as logoutAction } from "../Redux/authSlice.js";

export function useAuth() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Login handler
  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginApi({ email, password });
      dispatch(setUserInfo(data.user || data));
      setLoading(false);
      return { success: true, data };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Login failed. Please try again.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    } 
  };

  // Register handler
  const handleRegister = async ({ name, email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const data = await registerApi({ name, email, password });
      dispatch(setUserInfo(data.user || data));
      setLoading(false);
      return { success: true, data };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Registration failed. Please try again.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    }
  };

  // Logout handler
  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      await logoutApi();
      dispatch(logoutAction());
      setLoading(false);
      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Logout request failed on server.";
      setError(message);
      setLoading(false);
      return { success: false, error: message };
    } 
  };

  return {
    userInfo,
    isAuthenticated: Boolean(userInfo),
    loading,
    error,
    handleLogin,
    handleRegister,
    handleLogout,
  };
}