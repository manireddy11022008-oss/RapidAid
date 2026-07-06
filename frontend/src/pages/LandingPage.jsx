import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import EmergencyTimeline from "../components/home/EmergencyTimeline";
import ControlPanel from "../components/home/ControlPanel";
import NotificationCenter from "../components/home/NotificationCenter";

function LandingPage({ sos, setSOS }) {
  return (
    <>
      <Navbar />

      <Hero sos={sos} setSOS={setSOS} />

      <FeatureCards />

      <EmergencyTimeline sos={sos} />

      <ControlPanel sos={sos} />

      <NotificationCenter sos={sos} />

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            RapidAid Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-red-50 rounded-xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-red-600">500+</h3>
              <p className="mt-3">Registered Users</p>
            </div>

            <div className="bg-red-50 rounded-xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-red-600">35</h3>
              <p className="mt-3">Hospitals</p>
            </div>

            <div className="bg-red-50 rounded-xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-red-600">60</h3>
              <p className="mt-3">Ambulances</p>
            </div>

            <div className="bg-red-50 rounded-xl p-8 text-center shadow">
              <h3 className="text-5xl font-bold text-red-600">98%</h3>
              <p className="mt-3">Successful Response Rate</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            How RapidAid Works
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">

            <div>
              <div className="text-6xl">🚨</div>
              <h3 className="font-bold mt-4">Press SOS</h3>
            </div>

            <div>
              <div className="text-6xl">📍</div>
              <h3 className="font-bold mt-4">GPS Detection</h3>
            </div>

            <div>
              <div className="text-6xl">🏥</div>
              <h3 className="font-bold mt-4">Hospital Selection</h3>
            </div>

            <div>
              <div className="text-6xl">🚑</div>
              <h3 className="font-bold mt-4">Ambulance Assigned</h3>
            </div>

            <div>
              <div className="text-6xl">❤️</div>
              <h3 className="font-bold mt-4">Treatment Begins</h3>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">RapidAid</h2>

        <p className="mt-3">
          AI Powered Emergency Response & Smart Hospital Routing
        </p>

        <p className="mt-6 text-gray-400">
          Built for Hackathon 2026
        </p>
      </footer>
    </>
  );
}

export default LandingPage;