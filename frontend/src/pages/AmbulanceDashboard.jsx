import { useEffect, useState } from "react";
import axios from "axios";

function AmbulanceDashboard() {
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
      const res = await axios.get("http://localhost:5000/api/emergency");
      setEmergencies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

 
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Ambulance Dashboard
      </h1>

      {emergencies.map((e) => (
        <div
          key={e._id}
          className="bg-white p-6 rounded-xl shadow-lg mb-5"
        >
          <h2 className="text-2xl font-bold">
            {e.patientName}
          </h2>

          <p className="mt-2">📞 {e.phone}</p>

          <p>🏥 {e.assignedHospital}</p>

        
        </div>
      ))}
    </div>
  );
}

export default AmbulanceDashboard;