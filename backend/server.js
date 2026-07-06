const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const hospitalRoutes = require("./routes/hospitalRoutes");
const ambulanceRoutes = require("./routes/ambulanceRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");

const app = express();
const authRoutes = require("./routes/authRoutes");

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚑 RapidAid Backend Running Successfully",
  });
});

app.use("/api/hospitals", hospitalRoutes);
app.use("/api/ambulances", ambulanceRoutes);
app.use("/api/emergency", emergencyRoutes);

const PORT = process.env.PORT || 5000;



app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});