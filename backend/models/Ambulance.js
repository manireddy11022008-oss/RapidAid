const mongoose = require("mongoose");

const AmbulanceSchema = new mongoose.Schema({
  driverName: String,
  ambulanceNo: String,
  status: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model("Ambulance", AmbulanceSchema);