import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
