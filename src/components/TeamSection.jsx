const team = [
  { name: "Saqib", role: "UI/UX Designer", img: "https://via.placeholder.com/150" },
  { name: "Ayesha", role: "Frontend Developer", img: "https://via.placeholder.com/150" },
  { name: "Hassan", role: "3D Animator", img: "https://via.placeholder.com/150" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-pink-500"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
