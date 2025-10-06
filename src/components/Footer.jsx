import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebook, color: '#1877F2', delay: 0.2 },
    { icon: FaTwitter, color: '#1DA1F2', delay: 0.3 },
    { icon: FaInstagram, color: '#E4405F', delay: 0.4 },
    { icon: FaGithub, color: '#FFFFFF', delay: 0.5 },
  ]

  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  href="https://tech-ai-zeta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: social.delay }}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon p-3 rounded-full glass-card"
                  style={{ color: social.color }}
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-sm"
          >
            © 2024 Studio Play. All rights reserved. | Stuodic
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer