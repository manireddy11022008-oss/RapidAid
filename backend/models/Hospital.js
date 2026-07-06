const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    beds: Number,
    ambulances: Number,

    latitude: Number,
    longitude: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hospital", hospitalSchema);