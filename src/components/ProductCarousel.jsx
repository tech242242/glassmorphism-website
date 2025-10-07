import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Product 1", color: "from-pink-500 to-blue-500" },
  { name: "Product 2", color: "from-green-400 to-blue-400" },
  { name: "Product 3", color: "from-yellow-400 to-red-400" },
  { name: "Product 4", color: "from-purple-500 to-pink-500" },
  { name: "Product 5", color: "from-cyan-400 to-teal-400" },
  { name: "Product 6", color: "from-orange-500 to-yellow-400" },
];

export default function ProductCarousel() {
  const [angle, setAngle] = useState(0);
  const step = 360 / products.length;

  return (
    <section className="relative py-24 text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
        Our Products
      </h2>

      <div className="relative w-96 h-96">
        {products.map((product, index) => {
          const rotation = index * step + angle;
          const x = 120 * Math.cos((rotation * Math.PI) / 180);
          const y = 120 * Math.sin((rotation * Math.PI) / 180);
          return (
            <motion.div
              key={index}
              animate={{ x, y, rotate: rotation }}
              transition={{ duration: 0.6 }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br ${product.color} shadow-xl cursor-pointer`}
            >
              {product.name}
            </motion.div>
          );
        })}
      </div>

      <div className="flex gap-6 mt-10">
        <button
          onClick={() => setAngle(angle - step)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full hover:scale-105 transition-all shadow-lg"
        >
          ⬅️ Left
        </button>
        <button
          onClick={() => setAngle(angle + step)}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full hover:scale-105 transition-all shadow-lg"
        >
          Right ➡️
        </button>
      </div>
    </section>
  );
}
