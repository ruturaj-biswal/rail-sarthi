function Features() {

  const features = [
    "🚆 Train Search",
    "👥 Crowd Prediction",
    "📊 Crowd Visualization",
    "🚦 Delay Prediction",
    "🎉 Festival Rush Alerts",
    "⭐ Favorite Trains",
    "📈 Seat Availability Trends",
    "🔄 Alternative Trains"
  ];

  return (
    <section className="relative py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
          Smart Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-8
                text-center
                text-white
                hover:scale-105
                hover:bg-white/20
                transition-all
                duration-300
                shadow-xl
              "
            >
              <h3 className="text-xl font-semibold">
                {feature}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;