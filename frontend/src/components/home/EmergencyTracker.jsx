export default function EmergencyTracker({ sos }) {
  if (!sos) return null;

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-slate-900 text-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-6">
        🌍 Live Emergency Tracker
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold">📍 Patient</h3>
          <p>Name: John Doe</p>
          <p>Condition: Critical</p>
          <p>Location: 17.3850, 78.4867</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold">🚑 Ambulance</h3>
          <p>ID: A-12</p>
          <p>Status: En Route</p>
          <p>Speed: 62 km/h</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold">🏥 Hospital</h3>
          <p>Name: Apollo Hospital</p>
          <p>Trauma Center: Available</p>
          <p>Distance: 3.2 km</p>
        </div>

      </div>
    </div>
  );
}