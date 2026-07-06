import { useState, useEffect } from "react";
import axios from "axios";
import MapView from "../components/MapView";

function SOS() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState("");
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

  const [location, setLocation] = useState({
  latitude: null,
  longitude: null,
});

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser.user || loggedUser);
    }
  }, []);

  const sendSOS = () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLocation({
  latitude: position.coords.latitude,
  longitude: position.coords.longitude,
});
          await axios.post(
            "https://rapidaid-backend-36qt.onrender.com/api/emergency",
            {
              name: user.name,
              phone: user.phone || "Not Available",
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              report,
            }
          );

          alert("🚑 SOS Sent Successfully");

          setReport("");
          setPhoto(null);
          setVideo(null);

        } catch (err) {
          alert("Failed to Send SOS");
        }

        setLoading(false);
      },
      () => {
        alert("Location Permission Denied");
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[500px]">

        <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
          Emergency SOS
        </h1>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">

          <p><strong>Name:</strong> {user?.name}</p>

          <p><strong>Email:</strong> {user?.email}</p>

          <p><strong>Phone:</strong> {user?.phone || "Not Added"}</p>

        </div>

        <textarea
          placeholder="Describe the emergency..."
          className="border w-full p-3 rounded mb-4"
          rows="4"
          value={report}
          onChange={(e) => setReport(e.target.value)}
        />

        <label className="block mb-2 font-semibold">
          Upload Photo
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="mb-4"
        />

        <label className="block mb-2 font-semibold">
          Upload Video
        </label>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          className="mb-6"
        />

        <button
          onClick={sendSOS}
          className="w-full bg-red-600 text-white p-4 rounded-lg text-lg"
        >
          {loading ? "Sending..." : "🚨 Send Emergency SOS"}
        </button>

        {location.latitude && (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-3">
      📍 Live Emergency Location
    </h2>

    <MapView
      latitude={location.latitude}
      longitude={location.longitude}
    />
  </div>
)}

      </div>

    </div>
  );
}

export default SOS;