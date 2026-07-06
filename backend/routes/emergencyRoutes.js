const express = require("express");
const router = express.Router();

const Emergency = require("../models/Emergency");
const Hospital = require("../models/Hospital");

router.post("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();

    if (hospitals.length === 0) {
      return res.status(400).json({
        message: "No hospitals available",
      });
    }

    let nearestHospital = hospitals[0];
    let shortestDistance = Number.MAX_VALUE;

    for (const hospital of hospitals) {
      const distance = Math.sqrt(
        Math.pow(req.body.latitude - hospital.latitude, 2) +
        Math.pow(req.body.longitude - hospital.longitude, 2)
      );

      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestHospital = hospital;
      }
    }

    const emergency = await Emergency.create({
      patientName: req.body.name,
      phone: req.body.phone,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      assignedHospital: nearestHospital.name,
      status: "Pending",
    });

    // Automatic status updates
setTimeout(async () => {
  await Emergency.findByIdAndUpdate(emergency._id, {
    status: "Ambulance Assigned",
  });
}, 5000);

setTimeout(async () => {
  await Emergency.findByIdAndUpdate(emergency._id, {
    status: "Driver En Route",
  });
}, 10000);

setTimeout(async () => {
  await Emergency.findByIdAndUpdate(emergency._id, {
    status: "Patient Picked Up",
  });
}, 15000);

setTimeout(async () => {
  await Emergency.findByIdAndUpdate(emergency._id, {
    status: "Reached Hospital",
  });
}, 20000);

setTimeout(async () => {
  await Emergency.findByIdAndUpdate(emergency._id, {
    status: "Treatment Started",
  });
}, 25000);

setTimeout(async () => {
  await Emergency.findByIdAndUpdate(emergency._id, {
    status: "Completed",
  });
}, 30000);

    res.json({
      message: "SOS Sent Successfully",
      assignedHospital: nearestHospital.name,
      emergency,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// GET all emergencies
router.get("/", async (req, res) => {
  try {
    const emergencies = await Emergency.find().sort({ createdAt: -1 });

    res.json(emergencies);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ACCEPT EMERGENCY
router.put("/:id", async (req, res) => {
  try {
    const emergency = await Emergency.findByIdAndUpdate(
      req.params.id,
      {
        status: "Accepted",
      },
      {
        new: true,
      }
    );

    res.json(emergency);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;