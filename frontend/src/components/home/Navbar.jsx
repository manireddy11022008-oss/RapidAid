import { useState } from "react";
import { Ambulance, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-red-600 font-bold text-2xl"
        >
          <Ambulance size={28} />
          <span>RapidAid</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">

          <li><Link to="/" className="hover:text-red-600">Home</Link></li>

          <li><Link to="/features" className="hover:text-red-600">Features</Link></li>

          <li><Link to="/hospitals" className="hover:text-red-600">Hospitals</Link></li>

          <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>

          {user && (
            <>
              <li><Link to="/dashboard" className="hover:text-red-600">Patient</Link></li>

              <li><Link to="/sos" className="hover:text-red-600">SOS</Link></li>

              <li><Link to="/ambulance" className="hover:text-red-600">Ambulance</Link></li>

              <li><Link to="/hospital-dashboard" className="hover:text-red-600">Hospital</Link></li>

              <li><Link to="/admin" className="hover:text-red-600">Admin</Link></li>
            </>
          )}

        </ul>

        {/* Right Side */}
        <div className="hidden md:flex gap-3">

          {!user ? (
            <>
              <Link to="/login">
                <button className="px-5 py-2 rounded-lg border border-red-600 text-red-600">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="px-5 py-2 rounded-lg bg-red-600 text-white">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-5 py-2 rounded-lg bg-red-600 text-white"
            >
              Logout
            </button>
          )}

        </div>

        <button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
            </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 p-5">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>

            <Link to="/hospitals" onClick={() => setMenuOpen(false)}>
              Hospitals
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                  Patient Dashboard
                </Link>

                <Link to="/sos" onClick={() => setMenuOpen(false)}>
                  SOS
                </Link>

                <Link to="/ambulance" onClick={() => setMenuOpen(false)}>
                  Ambulance
                </Link>

                <Link
                  to="/hospital-dashboard"
                  onClick={() => setMenuOpen(false)}
                >
                  Hospital Dashboard
                </Link>

                <Link to="/admin" onClick={() => setMenuOpen(false)}>
                  Admin Dashboard
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-600 text-white py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full border border-red-600 text-red-600 py-2 rounded-lg">
                    Login
                  </button>
                </Link>

                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg">
                    Register
                  </button>
                </Link>
              </>
            )}

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;