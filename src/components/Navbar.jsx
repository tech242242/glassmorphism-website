export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-transparent absolute top-0 w-full z-10">
      <h1 className="text-2xl font-bold text-white">Studio Play</h1>
      <div className="space-x-6 hidden md:flex">
        {["Home", "About", "Features", "Projects", "Contact"].map((item) => (
          <a key={item} href="#" className="text-white hover:text-pink-400 transition">
            {item}
          </a>
        ))}
      </div>
      <button className="bg-gradient-to-r from-pink-500 to-indigo-500 px-5 py-2 rounded-full text-white shadow-glow hover:scale-105 transition">
        Get Started
      </button>
    </nav>
  );
}
