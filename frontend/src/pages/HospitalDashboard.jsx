import { useEffect, useState } from "react";
import axios from "axios";

function HospitalDashboard() {
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    loadEmergencies();

    const interval = setInterval(() => {
      loadEmergencies();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const loadEmergencies = async () => {
    try {
      const res = await axios.get("https://rapidaid-backend-36qt.onrender.com/api/emergency");
      setEmergencies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-red-600 mb-8">
        🏥 Hospital Dashboard
      </h1>

      {emergencies.map((e) => (
        <div
          key={e._id}
          className="bg-white rounded-xl shadow-lg p-6 mb-5"
        >
          <h2 className="text-2xl font-bold">
            👤 {e.patientName}
          </h2>

          <p className="mt-2">
            📞 {e.phone}
          </p>

          <p>
            🏥 {e.assignedHospital}
          </p>

          <p>
            🚨 {e.status}
          </p>

          <p>
            📍 {e.latitude.toFixed(4)}, {e.longitude.toFixed(4)}
          </p>
        </div>
      ))}

    </div>
  );
}

export default HospitalDashboard;