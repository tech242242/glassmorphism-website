import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Account18() {
  const images = [
    "https://i.supaimg.com/635a0255-9a1e-4c2e-aadb-226388c0452e.jpg",
    "https://i.supaimg.com/b5af89a5-e5a2-46ad-bdee-4cf0a8fb3784.jpg",
    "https://i.supaimg.com/4de8b55d-2196-402c-b84b-64404cb94d26.jpg",
    "https://i.supaimg.com/84e5d4e5-4117-429d-b7bb-b9c4241d33ff.jpg",
    "https://i.supaimg.com/993d287a-0e36-443f-b56f-b7992090b15b.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl relative shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:scale-[1.02] transition"
    >
      {/* 🔸 Image Slider */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={images[current]}
          alt={`FF Account ${current + 1}`}
          className="w-full h-64 object-cover rounded-xl transition"
        />
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* 🧾 Account Basic Info */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          Legendary Free Fire Account #18
        </h3>
        <p className="text-gray-300 text-sm mt-2">
          🌟 Top Rare Skins | 9 Evo Guns | 250+ Vault Items | Rare Emotes | Joker & Dino Bundles
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-pink-400 font-semibold text-lg">💸 Price: DM for Offer</span>
          <a
            href="https://wa.me/923478936242?text=Hi%20I%20want%20to%20buy%20Account%2018"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* 🔽 View More Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowDetail(!showDetail)}
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] font-semibold text-sm"
        >
          {showDetail ? "Hide Details" : "View Full Details"}
        </button>
      </div>

      {/* 📜 Detail Section */}
      {showDetail && (
        <div className="mt-5 max-h-72 overflow-y-auto p-3 bg-white/5 rounded-xl border border-white/10">
          <h4 className="font-bold text-lg mb-2 text-cyan-400">🔫 GUN SKINS & EVO GUNS</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>🌙 Total EVO Guns – 9 (All Level 4+ with Tokens)</li>
            <li>🌈 Rare UMP – Art of War</li>
            <li>🌟 Top Groza – Incubator Skin</li>
            <li>🌟 Top M1887 – Incubator Skin</li>
            <li>✨ MAC10 | P90 | AK47 | SVD | AWM | Trogon</li>
          </ul>

          <h4 className="font-bold text-lg mt-4 mb-2 text-cyan-400">👕 Bundles & Vault</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>🧢 Level Almost 64</li>
            <li>💎 250+ Rare Vault Items</li>
            <li>🌚 Joker, Dino, Money Heist Bundles</li>
            <li>✨ Black Pony Bundle, Legendary Bundles</li>
            <li>👕 Black Shirt + 3 Angelic Pants</li>
          </ul>

          <h4 className="font-bold text-lg mt-4 mb-2 text-cyan-400">🕺 Emotes</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>50+ Rare Emotes</li>
            <li>🌙 Entry Emotes, Group Emote, Rose Emote</li>
          </ul>

          <h4 className="font-bold text-lg mt-4 mb-2 text-cyan-400">✨ Extras</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>☄ 1 Look Changer</li>
            <li>👑 Exclusive Shirts & Incubator Items</li>
          </ul>
        </div>
      )}
    </motion.div>
  );
}
