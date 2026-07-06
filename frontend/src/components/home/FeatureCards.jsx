import { Brain, MapPinned, QrCode, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI Hospital Routing",
    description:
      "Finds the best hospital based on distance, equipment, and bed availability.",
  },
  {
    icon: <MapPinned size={40} />,
    title: "Live Tracking",
    description:
      "Track ambulances in real time and monitor estimated arrival.",
  },
  {
    icon: <QrCode size={40} />,
    title: "QR Medical Profile",
    description:
      "Instantly access emergency medical information using QR codes.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Analytics Dashboard",
    description:
      "Monitor emergency response performance with live analytics.",
  },
];

function FeatureCards() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Why Choose RapidAid?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <div className="text-red-500 mb-5">{feature.icon}</div>

              <h3 className="text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;