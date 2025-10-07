import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e2f] via-[#111] to-[#0a0a1f] opacity-80"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-gray-300 mb-10">
          We'd love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,255,255,0.1)] space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 15px #00f0ff" }}
              transition={{ type: "spring", stiffness: 200 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-white/5 border border-white/20 outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 15px #ff66cc" }}
              transition={{ type: "spring", stiffness: 200 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-white/5 border border-white/20 outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>

          <motion.textarea
            whileFocus={{ scale: 1.02, boxShadow: "0 0 20px #00f0ff" }}
            transition={{ type: "spring", stiffness: 200 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message..."
            required
            rows="5"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/20 outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00f0ff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 font-semibold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] transition-all"
          >
            {sent ? "Message Sent 💫" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* Decorative Floating Lights */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full animate-ping"></div>
    </section>
  );
}
