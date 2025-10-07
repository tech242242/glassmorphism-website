import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 text-white">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  )
}

export default App
