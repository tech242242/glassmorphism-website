export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gradient">
        Welcome to Studio Play
      </h1>
      <p className="max-w-xl text-gray-300 mb-6">
        A sleek glassmorphism UI with glowing gradients and smooth animations — designed to make your brand shine.
      </p>
      <div className="flex gap-4">
        <button className="bg-purple-neon px-6 py-3 rounded-xl text-white font-semibold glow-hover">
          Get Started
        </button>
        <button className="border border-purple-neon px-6 py-3 rounded-xl text-white font-semibold hover:bg-purple-neon transition">
          Learn More
        </button>
      </div>
    </section>
  )
}
