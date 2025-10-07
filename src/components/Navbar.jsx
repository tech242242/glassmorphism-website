export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gradient">Studio Play ⚡</h1>
      <ul className="flex gap-6 text-sm md:text-base">
        <li className="glow-hover cursor-pointer">Home</li>
        <li className="glow-hover cursor-pointer">Features</li>
        <li className="glow-hover cursor-pointer">About</li>
        <li className="glow-hover cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

