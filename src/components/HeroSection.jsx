export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left pt-40 px-10">
      <div className="max-w-lg">
        <h1 className="text-5xl font-extrabold leading-tight">
          Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Pley</span> Stuodic
        </h1>
        <p className="mt-5 text-gray-300">
          A modern creative studio for futuristic designs and innovative concepts.
        </p>
        <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full shadow-glow hover:scale-105 transition">
          Discover More
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-500 rounded-full blur-3xl opacity-40"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3281/3281304.png"
            alt="studio"
            className="relative w-72 md:w-96 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
