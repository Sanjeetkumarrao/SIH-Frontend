import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ navigate for redirect
import motif from "../assets/img1.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  // ✅ Step 1: Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ Step 2: Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Step 3: Submit form -> backend call
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response from backend:", data);

      if (res.ok) {
        alert("Login successful ✅");
        // yaha tum user ko dashboard ya home page pe redirect kara sakte ho
        navigate("/"); 
      } else {
        alert(data.message || "Invalid credentials ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-100 to-teal-50 px-4 overflow-hidden">
      {/* Background Motifs */}
      <img
        src={motif}
        alt="decorative motif"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Main Card */}
      <div className="bg-gradient-to-br from-[#fdfdfd] to-[#f5faf9] rounded-2xl shadow-xl w-full max-w-md p-8 relative z-10 border border-teal-100">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Project Logo" className="w-16 h-16 mb-3" />
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Explore heritage, culture & traditions
          </p>
        </div>

        {/* ✅ Step 4: Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
