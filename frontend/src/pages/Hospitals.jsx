import { useEffect, useState } from "react";
import axios from "axios";

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    loadHospitals();
  }, []);

  const loadHospitals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/hospitals");
      setHospitals(res.data);
    } catch (err) {
      console.log(err);
      alert("Cannot load hospitals");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Nearby Hospitals
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {hospitals.map((hospital) => (
          <div
            key={hospital._id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold">{hospital.name}</h2>

            <p className="mt-3">
              📍 {hospital.location}
            </p>

            <p>🛏 Beds: {hospital.beds}</p>

            <p>🚑 Ambulances: {hospital.ambulances}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hospitals;