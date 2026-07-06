import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post(
        "https://rapidaid-backend-36qt.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

     alert("Login Successful");

localStorage.setItem("user", JSON.stringify(res.data));

const role = res.data.user.role;

if (role === "patient") {
  navigate("/dashboard");
} else if (role === "hospital") {
  navigate("/hospital-dashboard");
} else if (role === "ambulance") {
  navigate("/ambulance");
} else if (role === "admin") {
  navigate("/admin");
} else {
  navigate("/dashboard");
}
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-6 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="bg-red-600 text-white w-full p-3 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;