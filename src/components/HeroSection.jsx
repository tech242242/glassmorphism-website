import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left pt-40 px-10">
      <motion.div
        className="max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
          Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Pley</span> Stuodic
        </h1>
        <p className="mt-5 text-gray-200">
          A modern creative studio for futuristic designs and innovative concepts.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px #a855f7" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-glow"
        >
          Discover More
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 relative"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-500 rounded-full blur-3xl opacity-30"></div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3281/3281304.png"
          alt="studio"
          className="relative w-72 md:w-96 mx-auto"
        />
      </motion.div>
    </section>
  );
}


