import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ali Khan",
    text: "Absolutely love the design! It's smooth and futuristic. Highly recommended.",
  },
  {
    name: "Sarah Ahmed",
    text: "Best UI experience I’ve ever had. Fast, clean and modern.",
  },
  {
    name: "John Smith",
    text: "Amazing animations and user-friendly layout. 10/10!",
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
            className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-200 italic mb-4">“{review.text}”</p>
            <h4 className="font-semibold text-pink-400">{review.name}</h4>
          </motion.div>
        ))}
      </div>

      {/* ⭐ Overall Rating */}
      <motion.div
        className="mt-10 flex flex-col items-center"
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
