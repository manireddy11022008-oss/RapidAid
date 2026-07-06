import { useEffect, useState } from "react";

export default function ControlPanel({ sos }) {
  const [eta, setEta] = useState(240);

  useEffect(() => {
    if (!sos) return;

    setEta(240);

    const timer = setInterval(() => {
      setEta((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sos]);

  const minutes = Math.floor(eta / 60);
  const seconds = eta % 60;

  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <div className="bg-slate-900 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white mb-8">
          🚨 RapidAid Emergency Control Center
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 rounded-xl p-5">
            <h3 className="text-red-400 font-bold mb-4">🚑 Ambulance</h3>
            <p className="text-white">ID : A-12</p>
            <p className="text-white">Status : {sos ? "En Route" : "Waiting"}</p>
            <p className="text-white">Speed : 62 km/h</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-5">
            <h3 className="text-green-400 font-bold mb-4">🏥 Hospital</h3>
            <p className="text-white">Apollo Hospital</p>
            <p className="text-white">Trauma Center Available</p>
            <p className="text-white">ICU Beds : 6</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-5">
            <h3 className="text-yellow-400 font-bold mb-4">🤖 AI</h3>
            <p className="text-white">
              ETA : {eta === 0 ? "Arrived" : `${minutes}:${seconds.toString().padStart(2, "0")}`}
            </p>
            <p className="text-white">Traffic : Moderate</p>
            <p className="text-white">Confidence : 98%</p>
          </div>

        </div>

      </div>
    </section>
  );
}