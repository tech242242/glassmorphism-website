import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="glass-effect fixed top-0 left-0 right-0 z-50 mx-4 mt-4 rounded-2xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            <span className="text-gradient">Studio Play</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.1, color: '#7B2FF7' }}
                className="text-white hover:text-purple-neon cursor-pointer font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-6 py-2 rounded-full text-white font-semibold glow-hover"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
