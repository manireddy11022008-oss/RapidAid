# API Documentation

## Overview

RapidAid provides RESTful APIs for communication between the frontend, backend, hospitals, ambulances, pharmacies, and administrators.

---

# Authentication APIs

## Register User

**POST** `/api/auth/register`

### Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "********",
  "phone": "9876543210"
}
```

### Response

```json
{
  "message": "User registered successfully"
}
```

---

## Login

**POST** `/api/auth/login`

Returns a JWT token after successful authentication.

---

# Emergency APIs

## Create Emergency Request

**POST** `/api/emergency`

Creates a new emergency request.

---

## Get Emergency Status

**GET** `/api/emergency/:id`

Returns:

- Current Status
- Assigned Ambulance
- Assigned Hospital
- ETA

---

# Hospital APIs

## Get Nearby Hospitals

**GET** `/api/hospitals`

Returns hospitals sorted by AI recommendation.

---

## Update Hospital Resources

**PUT** `/api/hospital/resources`

Updates:

- ICU Beds
- Equipment
- Doctors
- Emergency Capacity

---

# Ambulance APIs

## Get Nearby Ambulances

**GET** `/api/ambulances`

Returns available ambulances near the patient.

---

## Update Ambulance Location

**PUT** `/api/ambulance/location`

Updates the ambulance's live GPS location.

---

# Hazard Reporting APIs

## Submit Hazard Report

**POST** `/api/hazards`

Allows users to report:

- Potholes
- Damaged Roads
- Traffic Signals
- Street Lights
- Construction Hazards

---

# AI APIs

## Hospital Recommendation

**POST** `/api/ai/recommend-hospital`

Returns the most suitable hospital based on patient condition and hospital resources.

---

## Emergency Severity Analysis

**POST** `/api/ai/severity`

Returns:

- Critical
- High
- Medium
- Low

---

# Future APIs

- Wearable Device Integration
- Government Emergency Services
- Smartwatch Monitoring
- AI Health Assistant
