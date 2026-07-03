# RapidAid Data Flow Diagram (DFD) - Level 1

## Overview

The Level 1 Data Flow Diagram expands the RapidAid system into its major internal processes. It illustrates how emergency requests are processed, analyzed, and managed between different modules.

```mermaid
flowchart TD

Patient([👤 Patient])

P1((1. User Authentication))
P2((2. Emergency SOS))
P3((3. AI Emergency Analysis))
P4((4. Ambulance Dispatch))
P5((5. Hospital Recommendation))
P6((6. Notification Service))
P7((7. QR Medical Profile))
P8((8. Analytics & Reports))

DB[(MongoDB Database)]

Ambulance([🚑 Ambulance])
Hospital([🏥 Hospital])
Admin([👨‍💼 Admin])
Government([🏛️ Government])

Patient --> P1
Patient --> P2
Patient --> P7

P1 --> DB
P2 --> P3
P3 --> P4
P3 --> P5

P4 --> Ambulance
P5 --> Hospital

P4 --> P6
P5 --> P6

P6 --> Patient
P6 --> Ambulance
P6 --> Hospital

P2 --> DB
P3 --> DB
P4 --> DB
P5 --> DB
P6 --> DB
P7 --> DB
P8 --> DB

Admin --> P8

Patient --> Government
```

## Internal Processes

### 1. User Authentication
- User Registration
- Login
- Role Verification

### 2. Emergency SOS
- Receive SOS Request
- Capture GPS Location
- Create Emergency Case

### 3. AI Emergency Analysis
- Severity Assessment
- Smart Hospital Recommendation
- Route Optimization

### 4. Ambulance Dispatch
- Identify Nearest Ambulance
- Send Emergency Request
- Track Ambulance Status

### 5. Hospital Recommendation
- Check ICU Availability
- Check Doctors
- Check Equipment
- Select Best Hospital

### 6. Notification Service
- Notify Patient
- Notify Ambulance
- Notify Hospital
- Notify Emergency Contacts

### 7. QR Medical Profile
- Generate QR Code
- Retrieve Medical Information

### 8. Analytics & Reports
- Response Time Analysis
- Emergency Trends
- Hospital Performance
- Ambulance Utilization

## Data Store

**MongoDB Database**

Stores:
- Users
- Medical Profiles
- Emergency Requests
- Hospitals
- Ambulances
- Notifications
- Hazard Reports
- Analytics

## Summary

The Level 1 DFD provides a detailed representation of the internal modules of RapidAid and how data flows between users, system processes, and the database.
