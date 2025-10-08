import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";
import RotatingLogo from "./components/RotatingLogo";

// 🆕 New Sections
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import CustomerReviews from "./components/CustomerReviews";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white scroll-smooth">
      {/* 🌈 Background */}
      <ThemeManager />

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <HeroSection />
        <RotatingLogo />
      </motion.div>

      {/* 💎 Features Section */}
      <motion.div
        id="features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Features />
      </motion.div>

      {/* 🌀 Product Carousel Section */}
      <motion.div
        id="products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProductCarousel />
      </motion.div>

      {/* 📝 About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutSection />
      </motion.div>

      {/* 🧑‍💻 Team Section */}
      <motion.div
        id="team"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <TeamSection />
      </motion.div>

      {/* ⭐ Customer Reviews */}
      <motion.div
        id="reviews"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CustomerReviews />
      </motion.div>

      {/* 💌 Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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

