export default function Account1() {
  return (
    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:scale-105 transition">
      <img
        src="https://i.supaimg.com/your-image-link-here.jpg"
        alt="Free Fire Account"
        className="w-full h-52 object-cover rounded-xl mb-3"
      />
      <h3 className="text-xl font-bold text-white">Free Fire Account #1</h3>
      <p className="text-gray-300 text-sm mt-2">
        Level: 65 | Rank: Heroic | Skins: Rare Bundle | Diamonds: 300+
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-pink-400 font-semibold text-lg">Price: 1200 Rs</span>
        <a
          href="https://wa.me/923478936242?text=Hi%20I%20want%20to%20buy%20Account%201"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}



