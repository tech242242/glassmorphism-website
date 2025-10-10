import { motion } from "framer-motion";

const team = [
  {
    name: "Muhammad Saqib",
    role: "UI/UX Designer",
    img: "https://i.supaimg.com/84f2b7ba-6eb3-4761-882f-c9247e5057f1.jpg",
  },
  {
    name: "Ayesha Noor",
    role: "Frontend Developer",
    img: "https://i.supaimg.com/38640407-62ec-4d03-988b-b15f629b9ead.jpg",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 px-6 max-w-6xl mx-auto text-center relative"
    >
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-3xl"></div>

      {/* 💫 Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-14 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Meet Our Creative Team
      </motion.h2>

      {/* 👥 Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255, 0, 255, 0.3)",
            }}
            className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg transition-all hover:bg-white/20"
          >
            {/* 🖼️ Profile Image */}
            <div className="relative w-36 h-36 mx-auto mb-5">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-2 border-cyan-400 shadow-lg group-hover:rotate-3 transition-transform duration-500"
              />
              {/* 💫 Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 opacity-20 blur-lg group-hover:opacity-50 transition duration-500"></div>
            </div>

            {/* 👤 Info */}
            <h3 className="text-2xl font-semibold mb-1 text-white">
              {member.name}
            </h3>
            <p className="text-pink-400 font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
