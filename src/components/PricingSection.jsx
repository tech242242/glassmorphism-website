import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    id: 1,
    title: "UK Account 🇬🇧",
    price: "700 Rs",
    img: "https://i.supaimg.com/fe058907-22bb-488d-ae15-b3038a93389c.png",
    desc: "Get verified UK account with full access & security.",
    whatsapp: "03478936242",
  },
  {
    id: 2,
    title: "CapCut Pro ✂️",
    price: "400 Rs",
    img: "https://i.supaimg.com/42a000ab-df0f-4bd7-92c2-b6307bb1aef5.png",
    desc: "CapCut Premium access — no watermark & exclusive effects.",
    whatsapp: "03478936242",
  },
  {
    id: 3,
    title: "Free Fire Panel 🔥",
    price: "900 Rs",
    img: "https://i.supaimg.com/ec5d7050-19b1-4948-bc9c-9bc02f07d5ff.jpg",
    desc: "Full panel access with premium features & extra security.",
    whatsapp: "03478936242",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 relative text-white overflow-hidden bg-transparent"
    >
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
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col sm:flex-row items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-500 ease-out"
            >
              {/* 📸 Image Side — FULL SIZE no crop */}
              <div className="relative w-full sm:w-1/3 flex justify-center items-center overflow-hidden rounded-2xl shadow-lg bg-black/20 p-2">
                <motion.img
                  src={plan.img}
                  alt={plan.title}
                  className="max-w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>
              </div>

              {/* 💬 Text Side */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                  {plan.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base opacity-90">
                  {plan.desc}
                </p>

                {/* 💰 Price Tag */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 font-semibold text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition"
                >
                  {plan.price}
                </motion.div>

                {/* 🛍️ Buy Now Button with WhatsApp Icon */}
                <motion.a
                  href={`https://wa.me/92${plan.whatsapp.slice(
                    1
                  )}?text=Hi!%20I%20want%20to%20buy%20the%20${encodeURIComponent(
                    plan.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center sm:justify-start items-center gap-2 mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 font-semibold text-white shadow-md hover:shadow-[0_0_20px_rgba(0,255,100,0.3)] transition-all duration-300 ease-in-out"
                >
                  <FaWhatsapp size={22} className="animate-pulse" />
                  Buy Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
