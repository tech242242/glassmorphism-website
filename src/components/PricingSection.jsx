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
              {/* 📸 Image Side */}
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

                {/* 💰 Price */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 font-semibold text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition"
                >
                  {plan.price}
                </motion.div>

                {/* 🛍️ Buy Now */}
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

        {/* 📝 Extra Info Section */}
        <div className="mt-20 space-y-16">
          {/* WhatsApp Bot */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-500">
            <img
              src="https://i.supaimg.com/5141613d-3251-4cd6-add6-391a49f25d26.jpg"
              alt="WhatsApp Bot"
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-2xl font-bold text-cyan-400">
                ⚡ WhatsApp Bot – One Click Power!
              </h3>
              <p className="text-white/80 leading-relaxed">
                The bot is designed to enhance group communication by efficiently tagging all participants with just a click.
                Key features: <strong>Anti-Once</strong>, <strong>Anti-Delete</strong>, <strong>Auto React</strong>, <strong>Auto Reply</strong>, <strong>Song & Drama Download</strong>.
                💰 250 Rs (was 500 Rs) 📞 03478936242
              </p>
            </div>
          </div>

          {/* TikTok Boost */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.2)] transition-all duration-500">
            <img
              src="https://i.supaimg.com/aaef307e-489d-4eaa-a818-2c6657e280e6.jpg"
              alt="TikTok Boost"
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-2xl font-bold text-pink-400">
                🚀 Boost Your TikTok Presence
              </h3>
              <p className="text-white/80 leading-relaxed">
                Get <strong>10,000+ guaranteed views</strong> and unlimited growth on your TikTok content.
                Perfect for influencers, creators & businesses.Are you ready to take your TikTok game to the next level? Look no further!
Our innovative service guarantees 10,000+ views on your TikTok videos, giving your content the exposure it truly deserves. With our cutting-edge technology, your account will reach a wider audience and experience rapid growth.

Say goodbye to low engagement and stagnant view counts. Say hello to massive reach, viral potential, and unstoppable growth. Whether you're a content creator, influencer, or business owner, our service is specially designed to help you stand out and succeed on TikTok.
                📞 03478936242
              </p>
            </div>
          </div>

          {/* Pro Mods */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-500">
            <img
              src="https://i.supaimg.com/d7dc11a6-62f8-4f2c-b0fb-e7c65dc8ee0a.png"
              alt="Pro Mods"
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-2xl font-bold text-purple-400">
                💎 Premium Apps with Tech.AI Pro Mods
              </h3>
              <p className="text-white/80 leading-relaxed">
                Unlock <strong>Capcut Pro</strong>, <strong>Netflix</strong>, <strong>Whatsapp Gold</strong>, 
                <strong>Spotify</strong>, <strong>Remini Pro</strong> & more! Tech. AI, a service offered by Mr. Saqib, is now providing pro mods for popular apps. The pro mods include Capcut Pro, Netflix screen, TikTok live, Picsart Pro, Whatsapp Gold, PhotoRoom Pro, Yt Music Pro, Spotify Pro, and Remini Pro.
These modified apps offer additional features and premium functionality not available in their standard versions. To get access to these pro mods, customers can contact Tech. AI via WhatsApp at ‪+923478936242‬.
With Tech. AI's pro mods, users can enhance their app experience and enjoy premium features without paying for them. The service is likely to appeal to tech-savvy individuals in Pakistan and beyond." 
                📞 +92 347 8936242
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
