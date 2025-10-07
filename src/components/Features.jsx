import React from "react";

const features = [
  { title: "Horere Cronus", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "Nobe Fis", desc: "Natus rerum magni fuga, mollitia repellat et totam dolorum." },
  { title: "Urnamed Piliee", desc: "Omnis asperiores doloremque distinctio autem illum adipisci." },
];

const Features = () => {
  return (
    <section className="py-24 px-6 md:px-16 relative text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-neon/10 to-transparent blur-2xl"></div>

      <h2 className="text-4xl font-extrabold mb-12 text-center text-gradient relative z-10">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="glass-card rounded-3xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
