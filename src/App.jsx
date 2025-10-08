import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import About from "./components/About";                     // 🆕 About Section
import CustomerReviews from "./components/CustomerReviews"; // 🆕 Reviews Section
import TeamSection from "./components/TeamSection";         // 🆕 Team Section
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white">
      {/* 🌈 Background */}
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

      {/* 💎 Features */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Features />
      </motion.div>

      {/* 🌀 Product Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ProductCarousel />
      </motion.div>

      {/* 🆕 About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <About />
      </motion.div>

      {/* 🆕 Customer Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <CustomerReviews />
      </motion.div>

      {/* 🆕 Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <TeamSection />
      </motion.div>

      {/* 💌 Contact */}
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
