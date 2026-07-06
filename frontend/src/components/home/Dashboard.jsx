export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6">
      <h2 className="text-xl font-bold mb-4 text-red-600">
        🚑 RapidAid Live Dashboard
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Emergency</span>
          <span className="text-red-600 font-bold">ACTIVE</span>
        </div>

        <div className="flex justify-between">
          <span>Nearest Hospital</span>
          <span>Apollo</span>
        </div>

        <div className="flex justify-between">
          <span>ETA</span>
          <span>04:32</span>
        </div>

        <div className="flex justify-between">
          <span>Traffic</span>
          <span className="text-yellow-600">Moderate</span>
        </div>

        <div className="flex justify-between">
          <span>AI Route</span>
          <span className="text-green-600">Optimized</span>
        </div>
      </div>
    </div>
  );
}