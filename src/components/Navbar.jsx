import React from "react";
import { motion } from "framer-motion";
import RotatingLogo from "./RotatingLogo"; // 🌀 Import rotating logo

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-md z-50">
      {/* 🔹 Left Side — Logo + Text */}
      <div className="flex items-center space-x-3">
        {/* 🌀 Rotating Logo */}
        <RotatingLogo />

        {/* 🧾 Studio Play Text */}
        <span className="text-xl font-bold">Studio Play</span>
      </div>

      {/* 🔸 Center — Menu Links */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
        <li><a href="#features" className="hover:text-pink-400 transition">Features</a></li>
        <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
      </ul>

      {/* 🔸 Right Side — Get Started Button */}
      <a
        href="#get-started"
        className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition"
      >
        Get Started
      </a>
    </nav>
  );
}
