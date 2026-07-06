const mongoose = require("mongoose");

const EmergencySchema = new mongoose.Schema(
  {
    patientName: String,

    phone: String,

    latitude: Number,

    longitude: Number,

    emergencyType: String,

    assignedHospital: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Emergency", EmergencySchema);