import { useEffect, useState } from "react";

export default function CommandCenter({ sos }) {
  const [eta, setEta] = useState(240); // 4 minutes

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
    <div className="max-w-6xl mx-auto mt-8 bg-slate-900 text-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-xl font-bold text-red-500 mb-4">
        🚨 AI Command Center
      </h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Emergency ID</span>
          <span>RA-2026-001</span>
        </div>

        <div className="flex justify-between">
          <span>Patient</span>
          <span className="text-green-400">Detected</span>
        </div>

        <div className="flex justify-between">
          <span>Ambulance</span>
          <span>A-12</span>
        </div>

        <div className="flex justify-between">
          <span>Hospital</span>
          <span>Apollo</span>
        </div>

        <div className="flex justify-between">
          <span>ETA</span>
          <span className="text-yellow-400">
            {eta === 0
              ? "Arrived ✅"
              : `${minutes}:${seconds.toString().padStart(2, "0")}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Traffic</span>
          <span className="text-yellow-400">Moderate</span>
        </div>

        <div className="flex justify-between">
          <span>AI Confidence</span>
          <span className="text-green-400">98%</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span className="text-red-400">
            {eta === 0 ? "COMPLETED" : "ACTIVE"}
          </span>
        </div>
      </div>
    </div>
  );
}