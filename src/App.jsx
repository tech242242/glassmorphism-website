import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import PricingSection from "./components/PricingSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeManager from "./components/ThemeManager";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import CustomerReviews from "./components/CustomerReviews";
import FAQSection from "./components/FAQSection";

// 🆕 Accounts Page import
import AccountsPage from "./pages/AccountsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden relative font-[Poppins] text-white scroll-smooth">
        {/* 🌈 Background */}
        <div className="absolute inset-0 -z-10">
          <ThemeManager />
        </div>

        {/* 🧭 Navbar */}
        <Navbar />

        <Routes>
          {/* 🏡 HOME PAGE */}
          <Route
            path="/"
            element={
              <>
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

                {/* 💸 Pricing Section */}
                <section id="pricing">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <PricingSection />
                  </motion.div>
                </section>

                {/* 📝 About */}
                <section id="about">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <About />
                  </motion.div>
                </section>

                {/* ❓ FAQ Section */}
                <section id="faq">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <FAQSection />
                  </motion.div>
                </section>

                {/* 👥 Team */}
                <section id="team">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <TeamSection />
                  </motion.div>
                </section>

                {/* ⭐ Customer Reviews */}
                <section id="reviews">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <CustomerReviews />
                  </motion.div>
                </section>

                {/* 💌 Contact */}
                <section id="contact">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Contact />
                  </motion.div>
                </section>

                {/* 🔻 Footer */}
                <Footer />
              </>
            }
          />

          {/* 🛍️ ACCOUNTS PAGE */}
          <Route path="/accounts" element={<AccountsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
