import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel"; // 🌀 3D Product Carousel
import Contact from "./components/Contact"; // 💌 Contact Section
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";
import RotatingLogo from "./components/RotatingLogo"; // 🌀 Fixed Logo

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white">
      {/* 🌈 Background Theme */}
      <ThemeManager />

      {/* 🌟 Navbar */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      {/* 🌀 Fixed Rotating Logo (Studio Play ke niche fix hoga) */}
      <RotatingLogo />

      {/* 💎 Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Features />
      </motion.div>

      {/* 🌀 Product Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ProductCarousel />
      </motion.div>

      {/* 💌 Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <Contact />
      </motion.div>

      {/* 🔻 Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
