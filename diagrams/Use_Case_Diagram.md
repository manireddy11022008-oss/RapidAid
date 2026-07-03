## Overview

The Use Case Diagram represents the interactions between different actors and the RapidAid system. It defines the functionalities available to each user role.

---

   mermaid
flowchart LR

Patient((👤 Patient))
Ambulance((🚑 Ambulance Driver))
Hospital((🏥 Hospital Admin))
Admin((👨‍💼 System Admin))
Pharmacy((💊 Pharmacy))
Government((🏛️ Government Authority))
AI((🤖 AI Engine))

Patient --> Register[Register / Login]
Patient --> Profile[Manage Profile]
Patient --> QR[Generate QR Medical Profile]
Patient --> SOS[Emergency SOS]
Patient --> Location[Share Live Location]
Patient --> Track[Track Ambulance]
Patient --> PharmacyHelp[Find Nearby Pharmacy]
Patient --> Hazard[Report Public Hazard]
Patient --> History[View Emergency History]
Patient --> Chatbot[AI Chatbot]

AI --> Severity[Emergency Severity Analysis]
AI --> Recommend[Hospital Recommendation]
AI --> Route[Traffic-Aware Route Optimization]

Ambulance --> Receive[Receive Emergency Request]
Ambulance --> Accept[Accept / Reject Request]
Ambulance --> Navigate[Navigate to Patient]
Ambulance --> Update[Update Live Location]
Ambulance --> Deliver[Deliver Patient to Hospital]

Hospital --> Alert[Receive Emergency Alert]
Hospital --> ICU[Update ICU Bed Availability]
Hospital --> Doctors[Update Doctor Availability]
Hospital --> Equipment[Update Equipment Status]
Hospital --> Prepare[Prepare for Patient Arrival]

Admin --> Users[Manage Users]
Admin --> Hospitals[Manage Hospitals]
Admin --> Ambulances[Manage Ambulances]
Admin --> Analytics[View Analytics Dashboard]
Admin --> Reports[Generate Reports]

Pharmacy --> Medicines[Update Medicine Availability]

Government --> Hazards[View Hazard Reports]
Government --> Resolve[Resolve Public Hazards]
```

---

## Actors

### 👤 Patient/User
- Register and Login
- Manage Profile
- Trigger Emergency SOS
- Share Live Location
- Track Ambulance
- View Emergency History
- Generate QR Medical Profile
- Report Public Hazards
- Access AI Chatbot
- Find Nearby Pharmacies

### 🚑 Ambulance Driver
- Login
- Receive Emergency Requests
- Accept or Reject Requests
- Navigate to Patient
- Update Live Location
- Deliver Patient to Hospital

### 🏥 Hospital Administrator
- Login
- Manage ICU Beds
- Update Doctor Availability
- Update Equipment
- Receive Emergency Alerts
- Prepare for Incoming Patients

### 👨‍💼 System Administrator
- Manage Users
- Manage Hospitals
- Manage Ambulances
- Monitor Emergency Requests
- View Analytics Dashboard
- Generate Reports

### 💊 Pharmacy
- Update Medicine Availability
- Receive Medicine Requests

### 🏛️ Government Authority
- View Public Hazard Reports
- Update Hazard Resolution Status

### 🤖 AI Engine
- Analyze Emergency Severity
- Recommend Best Hospital
- Optimize Ambulance Route

---

## Key Features Covered

- Emergency SOS
- Smart Hospital Recommendation
- Traffic-Aware Ambulance Routing
- Live Ambulance Tracking
- QR Medical Profile
- AI Chatbot
- Public Hazard Reporting
- Emergency Analytics Dashboard
- Push Notifications

---

## Summary

This Use Case Diagram provides a high-level overview of how different users interact with the RapidAid system. It serves as the foundation for the database design, API development, frontend interfaces, and backend services.
