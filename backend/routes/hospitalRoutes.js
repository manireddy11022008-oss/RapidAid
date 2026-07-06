const express = require("express");
const router = express.Router();

const Hospital = require("../models/Hospital");

// GET all hospitals
router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ADD hospital
router.post("/", async (req, res) => {
  try {
    const hospital = new Hospital({
      name: req.body.name,
      location: req.body.location,
      beds: req.body.beds,
      ambulances: req.body.ambulances,
    });

    const savedHospital = await hospital.save();

    res.status(201).json(savedHospital);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get("/seed", async (req, res) => {
  try {
    await Hospital.deleteMany();

   await Hospital.insertMany([
  {
    name: "Apollo Hospital",
    location: "Hyderabad",
    beds: 120,
    ambulances: 8,
    latitude: 17.3850,
    longitude: 78.4867,
  },
  {
    name: "Yashoda Hospital",
    location: "Secunderabad",
    beds: 90,
    ambulances: 5,
    latitude: 17.4399,
    longitude: 78.4983,
  },
  {
    name: "KIMS Hospital",
    location: "Hyderabad",
    beds: 150,
    ambulances: 10,
    latitude: 17.4239,
    longitude: 78.4738,
  },
]);

    res.json({ message: "Hospitals Added Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;