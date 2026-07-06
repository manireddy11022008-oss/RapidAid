import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [latestEmergency, setLatestEmergency] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(storedUser.user || storedUser);

    loadLatestEmergency();
  }, []);

  const loadLatestEmergency = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/emergency");

      if (res.data.length > 0) {
        setLatestEmergency(res.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Welcome to RapidAid
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            👤 Patient Profile
          </h2>

          <p><strong>Name:</strong> {user?.name}</p>

          <p><strong>Email:</strong> {user?.email}</p>

          <p><strong>Phone:</strong> {user?.phone || "Not Added"}</p>

        </div>

        {/* Emergency Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            🚑 Current Emergency
          </h2>

          {latestEmergency ? (
            <>
              <p><strong>Status:</strong> {latestEmergency.status}</p>

              <p>
                <strong>Hospital:</strong>{" "}
                {latestEmergency.assignedHospital}
              </p>
            </>
          ) : (
            <p>No Active Emergency</p>
          )}

        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <button
          onClick={() => navigate("/sos")}
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          🚨 Emergency SOS
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;