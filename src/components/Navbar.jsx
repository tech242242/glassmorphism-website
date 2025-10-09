import { useState } from "react";

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
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔥 Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          StudioPlay
        </h1>

        {/* 🌐 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
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
              className="block text-lg hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
