import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// 📦 Auto import all accounts
const accountModules = import.meta.glob("../accounts/*.jsx", { eager: true });

export default function AccountPage() {
  const accounts = Object.values(accountModules).map((mod) => mod.default);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen text-white">
      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* 🌟 Logo */}
          <h1
            onClick={() => scroll.scrollToTop({ duration: 700, smooth: true })}
            className="text-xl font-bold text-cyan-400 cursor-pointer"
          >
            Legendary FF IDs
          </h1>

          {/* 🪄 Menu (Desktop) */}
          <ul className="hidden md:flex space-x-8 text-sm font-semibold text-white">
            <li>
              <ScrollLink
                to="buy"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                Buy ID
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="policies"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                Policies
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 text-center py-3 space-y-3">
            <ScrollLink
              to="buy"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer hover:text-cyan-400 transition"
            >
              Buy ID
            </ScrollLink>
            <ScrollLink
              to="policies"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer hover:text-cyan-400 transition"
            >
              Policies
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer hover:text-cyan-400 transition"
            >
              Contact Us
            </ScrollLink>
          </div>
        )}
      </nav>

      {/* 🛍 Accounts Section */}
      <section
        id="buy"
        className="pt-24 pb-10 max-w-7xl mx-auto px-5 transition-all duration-700"
      >
        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          🔥 Free Fire Accounts for Sale
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.length > 0 ? (
            accounts.map((AccountComponent, index) => (
              <div
                key={index}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <AccountComponent />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No accounts available right now.
            </p>
          )}
        </div>
      </section>

      {/* 📜 Policies Section */}
      <section
        id="policies"
        className="max-w-5xl mx-auto mt-20 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl text-gray-300 transition-all duration-700"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">📜 Our Policies</h2>
        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
          <li>✅ Once the ID is sold, it cannot be returned or exchanged.</li>
          <li>🔒 Full account information will be provided after payment.</li>
          <li>🛡 We do not sell hacked or banned IDs.</li>
          <li>⚡ If you face any issues within 24 hours, contact our support.</li>
          <li>📢 Serious buyers only — no refunds for change of mind.</li>
        </ul>
      </section>

      {/* 📞 Contact Section */}
      <section
        id="contact"
        className="max-w-5xl mx-auto mt-20 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center transition-all duration-700 mb-10"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">📞 Contact Us</h2>
        <p className="text-gray-300 mb-4">
          For any inquiries or support, reach out via WhatsApp.
        </p>
        <a
          href="https://wa.me/923478936242?text=Hi%20I%20want%20to%20buy%20an%20ID"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
        >
          WhatsApp Us
        </a>
      </section>
    </div>
  );
}

