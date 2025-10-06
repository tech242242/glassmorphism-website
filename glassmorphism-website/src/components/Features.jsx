import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: "Horere Cronus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      delay: 0.2
    },
    {
      title: "Nobe Fis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      delay: 0.4
    },
    {
      title: "Unramed Pillae",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      delay: 0.6
    }
  ]

  const lists = [
    {
      title: "Buns Commesp",
      items: ["Cines", "Bun", "Non", "Sonia", "Wivest", "Biosium"],
      delay: 0.8
    },
    {
      title: "Solpis in Sore Sruptcing",
      items: ["ADALANC", "SOLOMNE", "Ralf Gould", "Michalata", "Chibilla", "Vishnu"],
      delay: 1.0
    },
    {
      title: "Colmecs",
      items: ["SODIETA CODE BUT CREATIVE ESSENCE", "Salute a Placy", "Sostegre Dano", "Desurre Flora Luminio"],
      delay: 1.2
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 text-white group cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-neon to-blue-neon rounded-full transform group-hover:w-32 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-neon to-transparent my-16"
        ></motion.div>

        {/* List Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lists.map((list, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: list.delay }}
              className="glass-card rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold mb-6 text-gradient text-center">{list.title}</h4>
              <ul className="space-y-3">
                {list.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    whileHover={{ x: 10, color: '#7B2FF7' }}
                    className="text-white flex items-center transition-all duration-300 cursor-pointer"
                  >
                    <span className="w-2 h-2 bg-blue-neon rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features