import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/home/Navbar";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 3000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      const userRes = await axios.get("https://rapidaid-backend-36qt.onrender.com/api/auth/users");
      const hospitalRes = await axios.get("https://rapidaid-backend-36qt.onrender.com/api/hospitals");
      const emergencyRes = await axios.get("https://rapidaid-backend-36qt.onrender.com/api/emergency");

      setUsers(userRes.data);
      setHospitals(hospitalRes.data);
      setEmergencies(emergencyRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const active = emergencies.filter(
    (e) => e.status !== "Completed"
  ).length;

  const completed = emergencies.filter(
    (e) => e.status === "Completed"
  ).length;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-28 px-8">

        <h1 className="text-5xl font-bold text-red-600 mb-10">
          🚑 RapidAid Command Center
        </h1>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">👥</div>
            <h2 className="text-4xl font-bold">{users.length}</h2>
            <p className="text-gray-500">Users</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">🏥</div>
            <h2 className="text-4xl font-bold">{hospitals.length}</h2>
            <p className="text-gray-500">Hospitals</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">🚨</div>
            <h2 className="text-4xl font-bold">{emergencies.length}</h2>
            <p className="text-gray-500">Emergencies</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">🟡</div>
            <h2 className="text-4xl font-bold">{active}</h2>
            <p className="text-gray-500">Active</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-2">✅</div>
            <h2 className="text-4xl font-bold">{completed}</h2>
            <p className="text-gray-500">Completed</p>
          </div>

        </div>

        {/* Recent Emergencies */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-3xl font-bold mb-6">
            Recent Emergencies
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="py-3">Patient</th>

                <th>Hospital</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {emergencies.map((e) => (
                <tr
                  key={e._id}
                  className="border-b"
                >
                  <td className="py-4">{e.patientName}</td>

                  <td>{e.assignedHospital}</td>

                  <td>

                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">

                      {e.status}

                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;