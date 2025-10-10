import { useState } from "react";
import RotatingLogo from "./RotatingLogo"; // 🌀 Import rotating logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "Products", link: "#products" },
    { name: "About", link: "#about" },
    { name: "Team", link: "#team" },
    { name: "Reviews", link: "#reviews" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔥 Logo Section (Rotating Logo + Text side by side) */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10">
            <RotatingLogo />
          </div>
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,0,255,0.4)]">
            StudioPlay
          </h1>
        </div>

        {/* 🌐 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="relative px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-300 
                hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-pink-500/30 hover:text-white 
                hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:border-pink-400/50"
              >
                <span className="relative z-10">{item.name}</span>

                {/* Neon Border Glow */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 transition-opacity duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu List */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-white text-center py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-lg px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-pink-500/30 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
