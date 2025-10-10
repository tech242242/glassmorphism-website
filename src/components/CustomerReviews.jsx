import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ali Khan",
    text: "Absolutely love the design! It's smooth and futuristic. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah Ahmed",
    text: "Best UI experience I’ve ever had. Fast, clean and modern.",
    rating: 5,
  },
  {
    name: "John Smith",
    text: "Amazing animations and user-friendly layout. 10/10!",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section
      id="reviews"
      className="py-20 px-6 bg-white/5 backdrop-blur-xl rounded-2xl max-w-6xl mx-auto text-center"
    >
      {/* 🏷️ Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Customer Reviews
      </motion.h2>

      {/* 💬 Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="relative group p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all overflow-hidden"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated Glow Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-500/30 via-cyan-400/30 to-purple-500/30 blur-lg rounded-xl"></div>

            {/* Review Content */}
            <div className="relative z-10">
              <p className="text-gray-200 italic mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-pink-400">{review.name}</h4>

              {/* ⭐ Rating */}
              <div className="mt-3 flex justify-center text-yellow-400 text-xl">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* 🏷️ Small Tag */}
              <motion.p
                className="mt-2 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Customer Review
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ⭐ Overall Rating Summary */}
      <motion.div
        className="mt-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex space-x-1 text-yellow-400 text-3xl mb-2">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <p className="text-gray-300 text-lg">
          <span className="font-semibold text-white">4.9</span> out of 5 — based on 120+ reviews
        </p>
      </motion.div>
    </section>
  );
}
