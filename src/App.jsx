import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import CustomerReviews from "./components/CustomerReviews";
import PricingSection from "./components/PricingSection";  // 🆕 Added Pricing Section

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white scroll-smooth">
      {/* 🌈 Background */}
      <ThemeManager />

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <section id="home" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
        </motion.div>
      </section>

      {/* 💎 Features */}
      <section id="features">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Features />
        </motion.div>
      </section>

      {/* 🌀 Products */}
      <section id="products">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ProductCarousel />
        </motion.div>
      </section>

      {/* 📝 About */}
      <section id="about">
        <About />
      </section>

      {/* 💸 Pricing Section 🆕 */}
      <section id="pricing">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <PricingSection />
        </motion.div>
      </section>

      {/* 👥 Team */}
      <section id="team">
        <TeamSection />
      </section>

      {/* ⭐ Customer Reviews */}
      <section id="reviews">
        <CustomerReviews />
      </section>

      {/* 💌 Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* 🔻 Footer */}
      <Footer />
    </div>
  );
}
