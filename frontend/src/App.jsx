import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SOS from "./pages/SOS";
import Features from "./pages/Features";
import Hospitals from "./pages/Hospitals";
import Contact from "./pages/Contact";
import HospitalDashboard from "./pages/HospitalDashboard";

import AmbulanceDashboard from "./pages/AmbulanceDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sos" element={<SOS />} />
      <Route path="/features" element={<Features />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ambulance" element={<AmbulanceDashboard />} />
      <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
    </Routes>
  );
}

export default App;