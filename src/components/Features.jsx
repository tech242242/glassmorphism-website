const features = [
  { title: "Creative Concepts", desc: "Unique and visually stunning ideas.", icon: "🎨" },
  { title: "Smart Design", desc: "Functional yet beautiful user experiences.", icon: "💡" },
  { title: "Performance", desc: "Fast, smooth, and modern web solutions.", icon: "⚡" },
];

export default function Features() {
  return (
    <section className="py-24 px-10 grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-glow hover:bg-white/20 transition"
        >
          <div className="text-4xl mb-4">{f.icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-300">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
