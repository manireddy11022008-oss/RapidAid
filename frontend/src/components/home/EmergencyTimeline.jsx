import { useEffect, useState } from "react";

export default function EmergencyTimeline({ sos }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!sos) return;

    setStep(0);

    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3000),
      setTimeout(() => setStep(4), 4000),
      setTimeout(() => setStep(5), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [sos]);

  if (!sos) return null;

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-xl font-bold text-red-600 mb-4">
        🚨 AI Emergency Timeline
      </h2>

      <div className="space-y-3">

        {step >= 1 && <div>✅ SOS Received</div>}

        {step >= 2 && <div>📍 Patient Location Detected</div>}

        {step >= 3 && <div>🚑 Ambulance Assigned</div>}

        {step >= 4 && <div>🏥 AI Selected Best Hospital</div>}

        {step >= 5 && <div>🛣️ Fastest Route Calculated</div>}

      </div>
    </div>
  );
}