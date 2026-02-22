import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white">
          <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent cursor-pointer" onClick={() => navigate("/")}>
            Edura
          </span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <li>
            <a
              className="hover:text-indigo-400 transition"
              onClick={() => navigate("/")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-indigo-400 transition"
              onClick={() => navigate("/grades")}
            >
              Courses
            </a>
          </li>
          <li>
            <a className="hover:text-indigo-400 transition">Features</a>
          </li>
          <li>
            <a className="hover:text-indigo-400 transition">About</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center">
          <button
            className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            onClick={() => navigate("/login")}
          >
            Login / Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
