import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen text-white z-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Welcome to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          TECH.AI
        </span>
      </motion.h1>

      <p className="text-gray-300 max-w-xl mb-8">
        ✨ Welcome to the Ultimate Website! 🌐 Get access to all social media services, pro version apps,
        virtual numbers, Free Fire sensitivity & panels, PUBG hacks, top AI tools, and powerful editing tools — all in one place. 🚀🔥
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* 🌟 Get Started Button */}
        <motion.a
          href="https://glassmorphism-website-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] font-semibold transition-all"
        >
          Get Started
        </motion.a>

        {/* 🌐 Discover More Button */}
        <motion.a
          href="https://glassmorphism-website-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] font-semibold transition-all"
        >
          Discover More
        </motion.a>

        {/* 🛍️ Accounts for Sale Button (NEW) */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/accounts"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,255,100,0.5)] font-semibold transition-all"
          >
            🛍️ Accounts for Sale
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
