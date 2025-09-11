import React from "react";
import { Link } from "react-router-dom";
import motif from "../assets/hero1.jpg"; // decorative heritage pattern
import logo from "../assets/logo.png";   // project logo

const Signup = () => {
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
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Join us to explore heritage & traditions
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
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
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition duration-200 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
