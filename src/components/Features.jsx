import { motion } from "framer-motion";

const features = [
  { id: 1, title: "Feature 1", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 2, title: "Feature 2", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 3, title: "Feature 3", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 4, title: "Feature 4", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 5, title: "Feature 5", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 6, title: "Feature 6", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 7, title: "Feature 7", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 8, title: "Feature 8", link: "https://glassmorphism-website-xi.vercel.app/" },
  { id: 9, title: "Feature 9", link: "https://glassmorphism-website-xi.vercel.app/" },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 relative text-white overflow-hidden"
    >
      {/* 🔮 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        {/* 🧠 Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Powerful Features
        </motion.h2>

        {/* ⚡ Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.a
              key={feature.id}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                rotate: 1.5,
                boxShadow: "0px 0px 25px rgba(255, 0, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all"
            >
              {/* 🌈 Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Click to explore {feature.title.toLowerCase()} in action!
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
