import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden px-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-neon/30 via-blue-neon/20 to-pink-neon/20 blur-3xl opacity-40"></div>

      {/* Floating Glow Orb */}
      <div className="absolute top-40 right-40 w-72 h-72 bg-blue-neon/30 rounded-full blur-3xl animate-float"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gradient">
          Studio Pley <br /> Studoic
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          repellat nisi fuga deleniti amet!
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-neon to-blue-neon rounded-full font-semibold text-white glow-hover">
            Get Started
          </button>
          <button className="px-6 py-3 glass-effect rounded-full border border-purple-neon/30 text-white hover:border-blue-neon/50">
            Learn More
          </button>
        </div>
      </div>

      {/* Mock Image Section */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-16">
        <div className="glass-card p-10 rounded-3xl backdrop-blur-lg bg-white/5 shadow-2xl animate-float mt-10">
          <img
            src="/vite.svg"
            alt="Studio visual"
            className="w-32 h-32 mx-auto opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
