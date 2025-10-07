import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-effect backdrop-blur-lg py-4 px-10 flex justify-between items-center border-b border-white/10">
      <h1 className="text-2xl font-bold text-gradient">Studio Play</h1>

      <ul className="hidden md:flex gap-8 text-gray-200">
        <li className="hover:text-blue-neon transition">Home</li>
        <li className="hover:text-blue-neon transition">Features</li>
        <li className="hover:text-blue-neon transition">About</li>
        <li className="hover:text-blue-neon transition">Contact</li>
      </ul>

      <button className="px-5 py-2 bg-gradient-to-r from-purple-neon to-pink-neon rounded-full text-white glow-hover">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
