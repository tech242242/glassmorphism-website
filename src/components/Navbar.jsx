import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg px-6 py-4 flex items-center justify-between">
      {/* 🔸 Left Side: Logo + Text */}
      <div className="flex items-center space-x-3">
        {/* 🌀 Rotating Logo */}
        <motion.img
          src="/logo.png" // 👈 apna logo ka path yahan do
          alt="Logo"
          className="w-10 h-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />

        {/* 📝 StudioPlay Text */}
        <span className="text-2xl font-bold text-cyan-400">StudioPlay</span>
      </div>

      {/* 🔸 Right Side: Menu */}
      <ul className="flex space-x-8 text-white font-medium">
        <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
        <li><a href="#features" className="hover:text-pink-500 transition">Features</a></li>
        <li><a href="#products" className="hover:text-pink-500 transition">Products</a></li>
        <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
        <li><a href="#team" className="hover:text-pink-500 transition">Team</a></li>
        <li><a href="#reviews" className="hover:text-pink-500 transition">Reviews</a></li>
        <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
