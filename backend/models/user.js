const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    bloodGroup: {
      type: String,
      default: "",
    },

    age: {
      type: Number,
      default: 0,
    },

    emergencyContact: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["patient", "hospital", "ambulance", "admin"],
      default: "patient",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);