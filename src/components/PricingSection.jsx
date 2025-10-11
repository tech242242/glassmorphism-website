import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    title: "UK Account 🇬🇧",
    price: "700 Rs",
    img: "https://i.supaimg.com/560a1a72-77b3-455a-b9a2-1f0715242535.jpg", // 👉 apna UK account image link
    desc: "Get verified UK account with full access & security.",
  },
  {
    id: 2,
    title: "CapCut Pro ✂️",
    price: "400 Rs",
    img: "https://i.supaimg.com/810bd6b1-5347-4c46-9a90-5440a189fd07.jpg", // 👉 capcut image link
    desc: "CapCut Premium access — no watermark & exclusive effects.",
  },
  {
    id: 3,
    title: "Free Fire Panel 🔥",
    price: "900 Rs",
    img: "https://i.supaimg.com/5fbe5d55-cbfd-4eb4-8cf0-02e530d33126.jpg", // 👉 free fire panel image link
    desc: "Full panel access with premium features & extra security.",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative text-white overflow-hidden bg-transparent">
      {/* ✨ Transparent Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        {/* 🧠 Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Premium Pricing Plans 💰
        </motion.h2>

        {/* 💸 Pricing Cards */}
        <div className="flex flex-col space-y-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col sm:flex-row items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-500 ease-out"
            >
              {/* 📸 Image Side */}
              <div className="relative w-full sm:w-1/3 rounded-2xl overflow-hidden shadow-lg">
                <motion.img
                  src={plan.img}
                  alt={plan.title}
                  className="w-full h-52 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* ✨ Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>
              </div>

              {/* 💬 Text Side */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                  {plan.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base opacity-90">{plan.desc}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 font-semibold text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition"
                >
                  {plan.price}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
