import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function Signup({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      {/* Modal Box  */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl ring-2 ring-orange-500 p-6 sm:p-8 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-orange-600 transition-colors cursor-pointer"
        >
          <RxCross2 className="text-2xl" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">
            Create Account
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Order your favorite food in seconds!
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-3.5 text-orange-500" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all text-zinc-800"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Email Address
            </label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-3.5 text-orange-500" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all text-zinc-800"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3.5 text-orange-500" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all text-zinc-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-zinc-400 hover:text-orange-600 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all cursor-pointer mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer / Switch to Login */}
        <p className="text-center text-sm text-zinc-600 mt-5">
          Already have an account?{" "}
          <span
            onClick={onSwitchToLogin}
            className="text-orange-600 font-semibold hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
