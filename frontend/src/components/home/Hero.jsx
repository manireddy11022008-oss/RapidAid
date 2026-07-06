import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero({ setSOS }) {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white"
        >
          Save Lives
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-red-500 text-3xl md:text-5xl font-bold mt-4"
        >
          During The Golden Hour
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg md:text-xl"
        >
          AI-powered emergency response platform connecting patients,
          ambulances, hospitals and emergency responders using intelligent
          routing, live tracking and instant SOS assistance.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/sos")}
          className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-full text-white text-xl font-semibold shadow-xl"
        >
          🚨 Emergency SOS
        </motion.button>

      </div>
    </section>
  );
}

export default Hero;