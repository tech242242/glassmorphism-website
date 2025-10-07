export default function Features() {
  const features = [
    { title: "Creative Design", desc: "Sleek modern visuals with glowing glass panels." },
    { title: "Responsive Layout", desc: "Optimized for all devices — phones to desktops." },
    { title: "Smooth Animation", desc: "Subtle transitions that elevate the user experience." },
  ]

  return (
    <section className="py-24 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-gradient mb-12">Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="glass p-8 rounded-2xl glow-hover float">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
