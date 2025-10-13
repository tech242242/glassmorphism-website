import React, { useState, useEffect } from "react";
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

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const nextSlide = () =>
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  const prevSlide = () =>
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.12)] max-w-5xl mx-auto mt-10 hover:scale-[1.02] transition"
    >
      {/* Image Slider (maintain horizontal ratio) */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="w-full"
          style={{
            height: "540px",
            maxHeight: "60vh",
            display: "block",
            position: "relative",
          }}
        >
          <img
            src={images[current]}
            alt={`FF Account ${current + 1}`}
            className="w-full h-full object-cover rounded-xl transition-all duration-500"
            // keep horizontal ratio visually by fixed height; images are cover to fit
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          aria-label="previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 z-20"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          aria-label="next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 z-20"
        >
          <FaArrowRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-cyan-400 scale-125" : "bg-white/40"
              }`}
              aria-label={`go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Basic Info */}
      <div className="mt-6">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          💥 Legendary Free Fire Account #18 🔥
        </h2>

        <p className="text-gray-300 mt-2 text-sm">
          Top Rare Skins • 9 EVO Guns • 250+ Vault Items • Joker & Dino Bundles • Rare Emotes
        </p>

        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <span className="text-pink-400 font-semibold text-lg">💰 Price: DM for Best Offer</span>

          <div className="flex gap-3">
            <a
              href="https://wa.me/923478936242?text=Hi%20I%20want%20to%20buy%20Account%2018"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow"
            >
              Buy Now (WhatsApp)
            </a>

            <button
              onClick={() => setShowDetail((s) => !s)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.12)] font-semibold text-sm text-white"
            >
              {showDetail ? "Hide Details" : "View Full Details"}
            </button>
          </div>
        </div>
      </div>

      {/* Full Details (expandable) */}
      {showDetail && (
        <div className="mt-6 bg-white/5 p-6 rounded-xl border border-white/10 space-y-5 text-gray-300 text-sm leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">🔫 GUN SKINS &amp; EVO GUNS (LEVEL 4+)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🌙 <strong>Total EVO Guns – 9</strong> (All Level 4+ with Tokens)</li>
              <li>🌈 <strong>Rare UMP – Art of War</strong></li>
              <li>🌟 Top Groza – Incubator Skin</li>
              <li>👀 Top AUG – Incubator Skin</li>
              <li>🌟 Top Yellow M1887 – Incubator Skin</li>
              <li>🕸 Top AWM – Incubator Skin</li>
              <li>🌗 Top P90 ++ Rate of Fire Skin</li>
              <li>✨ Top MAC10 Skin</li>
              <li>💫 Top AK47 ++ Damage Skin</li>
              <li>💫 Top M1014 Skin</li>
              <li>🌟 Top SVD Skin</li>
              <li>⚡ Top Trogon Skin</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">👕 BUNDLES &amp; OUTFITS</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🧢 <strong>Level Almost 64</strong></li>
              <li>💎 <strong>250+ Top Rare Vault Items</strong></li>
              <li>🌚 <strong>Top 2 Joker Bundles</strong></li>
              <li>🌙 <strong>Top 3 Dino Bundles</strong></li>
              <li>🌟 <strong>Top 2 Money Heist Bundles</strong></li>
              <li>☄ <strong>Black Pony Bundle</strong></li>
              <li>📨 <strong>Top 2 Legendary Bundles</strong> (Booyah Day & Rampage)</li>
              <li>👕 <strong>Top Black Shirt</strong></li>
              <li>👖 <strong>Top Pants Collection</strong> — Red Anglic, Blue Anglic, Jazz Pants</li>
              <li>💧 <strong>Top Hair Sets</strong></li>
              <li>⚡ <strong>Top Body Wear</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">🕺 RARE EMOTES</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🌙 Top 2 Entry Emotes</li>
              <li>💧 50+ Top Rare Emotes</li>
              <li>🔪 Group Emote</li>
              <li>🌹 Rose Emote</li>
              <li>⚡ Justice Emote</li>
              <li>🌈 And Many More Rare Emotes…</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">🌟 EXTRA FEATURES</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>☄ <strong>1 Look Changer</strong></li>
              <li>👑 Many Top Incubator Items & Exclusive Shirts</li>
            </ul>
          </div>

          <p className="font-semibold text-lg text-pink-400">📢 Serious buyers only — no time pass.</p>
          <p className="italic text-gray-400">#FreeFireAccount #EvoGuns #RareBundles #TopVault #FreeFireSale</p>
        </div>
      )}
    </motion.div>
  );
}
