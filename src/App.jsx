import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Contact from "./components/Contact"; // 🧩 Added Contact Section
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white">
      {/* 🌈 Auto Rotating Background */}
      <ThemeManager />

      {/* 🌟 Foreground Content */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      {/* 💎 Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Features />
      </motion.div>

      {/* 💌 Contact Section (added here before Footer) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Contact />
      </motion.div>

      {/* 🔻 Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
