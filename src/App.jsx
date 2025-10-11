import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import PricingSection from "./components/PricingSection";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import CustomerReviews from "./components/CustomerReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white scroll-smooth bg-black">
      {/* 🌈 Background Theme Manager */}
      <ThemeManager />

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl"
        >
          <HeroSection />
        </motion.div>
      </section>

      {/* 💎 Features */}
      <section id="features" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <Features />
        </motion.div>
      </section>

      {/* 🌀 Products */}
      <section id="products" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <ProductCarousel />
        </motion.div>
      </section>

      {/* 💸 Pricing Section (⬆️ About se upar shift kiya gaya) */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent to-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <PricingSection />
        </motion.div>
      </section>

      {/* 📝 About */}
      <section id="about" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <About />
        </motion.div>
      </section>

      {/* 👥 Team */}
      <section id="team" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <TeamSection />
        </motion.div>
      </section>

      {/* ⭐ Customer Reviews */}
      <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <CustomerReviews />
        </motion.div>
      </section>

      {/* 💌 Contact */}
      <section id="contact" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <Contact />
        </motion.div>
      </section>

      {/* 🔻 Footer */}
      <footer className="mt-16 border-t border-white/10 py-10 bg-black/40 backdrop-blur-lg">
        <Footer />
      </footer>
    </div>
  );
}

