import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Footer from './components/Footer'
import ThemeManager from './components/ThemeManager'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ThemeManager />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default App