function Features() {
  const features = [
    {
      title: "🚑 Smart SOS",
      description: "Send emergency alerts instantly with one tap."
    },
    {
      title: "📍 Live Ambulance Tracking",
      description: "Track ambulance location in real time."
    },
    {
      title: "🏥 Smart Hospital Selection",
      description: "AI selects the nearest hospital with required facilities."
    },
    {
      title: "🤖 AI Route Optimization",
      description: "Finds the fastest route using live traffic."
    },
    {
      title: "📱 Instant Notifications",
      description: "Patient, family, ambulance and hospital stay connected."
    },
    {
      title: "📊 Emergency Dashboard",
      description: "Monitor emergency progress from start to finish."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-12">
        RapidAid Features
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;