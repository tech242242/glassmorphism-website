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
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-400">StudioPlay</h1>

        {/* 🌐 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-pink-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-pink-400 text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu List */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg text-white text-center py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-pink-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
