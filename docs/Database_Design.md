## Overview

RapidAid uses MongoDB as its primary database to store user information, emergency requests, hospitals, ambulances, doctors, pharmacies, and public safety reports.

The database is designed to provide fast retrieval, scalability, and support for real-time emergency operations.

---

## Main Collections

### Users
Stores patient and administrator information.

Fields:
- User ID
- Name
- Email
- Phone Number
- Password (Encrypted)
- Role
- Emergency Contacts

---

### Hospitals

Stores hospital details.

Fields:
- Hospital ID
- Hospital Name
- Address
- Location
- ICU Beds Available
- Emergency Beds
- Specialists
- Equipment Availability

---

### Ambulances

Stores ambulance information.

Fields:
- Ambulance ID
- Driver Name
- Driver Contact
- Current GPS Location
- Availability Status

---

### Emergency Requests

Stores all emergency cases.

Fields:
- Request ID
- Patient ID
- Location
- Emergency Type
- Severity Level
- Assigned Ambulance
- Assigned Hospital
- Current Status
- Timestamp

---

### Doctors

Stores doctor information.

Fields:
- Doctor ID
- Name
- Specialization
- Hospital ID
- Availability Status

---

### Pharmacies

Stores nearby pharmacy information.

Fields:
- Pharmacy ID
- Name
- Address
- Contact Number
- Working Hours

---

### Hazard Reports

Stores reports submitted by users.

Fields:
- Report ID
- User ID
- Hazard Type
- Description
- Location
- Photo URL
- Status
- Assigned Department

---

## Relationships

- One User can create multiple Emergency Requests.
- One Hospital can have many Doctors.
- One Hospital can receive many Emergency Requests.
- One Ambulance can handle multiple Emergency Requests over time.
- One User can submit multiple Hazard Reports.

---

## Database Advantages

- Fast document retrieval
- High scalability
- Flexible schema
- Real-time data support
- Easy integration with Node.js
