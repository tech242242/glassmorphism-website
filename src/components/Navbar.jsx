import React from "react";
import RotatingLogo from "./RotatingLogo";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-md z-50">
      <div className="flex items-center space-x-3">
        {/* Rotating logo + Studio Play text */}
        <RotatingLogo />
        <span className="text-xl font-bold">Studio Play</span>
      </div>

      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li><a href="#home" className="hover:text-pink-400">Home</a></li>
        <li><a href="#about" className="hover:text-pink-400">About</a></li>
        <li><a href="#features" className="hover:text-pink-400">Features</a></li>
        <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
      </ul>

      <a href="#get-started" className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold">
        Get Started
      </a>
    </nav>
  );
}
