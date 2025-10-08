const reviews = [
  {
    name: "Ali Khan",
    text: "Absolutely love the design! It's smooth and futuristic. Highly recommended.",
  },
  {
    name: "Sarah Ahmed",
    text: "Best UI experience I’ve ever had. Fast, clean and modern.",
  },
  {
    name: "John Smith",
    text: "Amazing animations and user-friendly layout. 10/10!",
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 px-6 bg-white/5 backdrop-blur-xl rounded-2xl max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-gray-200 italic mb-4">“{review.text}”</p>
            <h4 className="font-semibold text-pink-400">{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
