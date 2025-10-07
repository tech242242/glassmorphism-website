import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen text-white z-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">GlassWorld</span>
      </motion.h1>

      <p className="text-gray-300 max-w-xl mb-8">
        Explore futuristic glassmorphism design with animations, auto-themes, and interactive UI elements.
      </p>

      <div className="flex gap-4">
        <motion.a
          href="https://glassmorphism-website-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] font-semibold"
        >
          Get Started
        </motion.a>

        <motion.a
          href="https://glassmorphism-website-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] font-semibold"
        >
          Discover More
        </motion.a>
      </div>
    </section>
  );
}
