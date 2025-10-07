
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
    <section className="py-24 relative text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          Our Powerful Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.a
              key={feature.id}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">Click to explore {feature.title.toLowerCase()} in action!</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
