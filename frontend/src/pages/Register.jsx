import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bloodGroup: "",
    age: "",
    emergencyContact: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://rapidaid-backend-36qt.onrender.com/api/auth/register",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        bloodGroup: "",
        age: "",
        emergencyContact: "",
        role: "patient",
      });

    } catch (err) {
      alert(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={registerUser}
        className="bg-white p-8 rounded-xl shadow-lg w-[450px]"
      >

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Register
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-3"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-3"
          value={form.password}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded mb-3"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="bloodGroup"
          placeholder="Blood Group"
          className="w-full border p-3 rounded mb-3"
          value={form.bloodGroup}
          onChange={handleChange}
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          className="w-full border p-3 rounded mb-3"
          value={form.age}
          onChange={handleChange}
        />

        <input
          name="emergencyContact"
          placeholder="Emergency Contact"
          className="w-full border p-3 rounded mb-3"
          value={form.emergencyContact}
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full border p-3 rounded mb-6"
          value={form.role}
          onChange={handleChange}
        >
          <option value="patient">Patient</option>
          <option value="hospital">Hospital</option>
          <option value="ambulance">Ambulance</option>
          <option value="admin">Admin</option>
        </select>

        <button
          className="w-full bg-red-600 text-white py-3 rounded-lg"
          type="submit"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;