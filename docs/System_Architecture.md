## Overview

RapidAid follows a multi-tier architecture that connects patients, ambulances, hospitals, pharmacies, emergency authorities, and administrators through a centralized platform.

The architecture is divided into five major layers:

1. Presentation Layer
2. Application Layer
3. AI & Decision Layer
4. Database Layer
5. External Services Layer

---

## 1. Presentation Layer

This layer provides separate dashboards for different users.

### Patient Portal
- Emergency SOS
- Live Tracking
- Health Assistance
- Pharmacy Access
- Emergency History

### Hospital Dashboard
- ICU Management
- Equipment Availability
- Doctor Availability
- Emergency Alerts

### Admin Dashboard
- User Management
- Hospital Management
- Analytics
- System Monitoring

---

## 2. Application Layer

Responsible for business logic.

Modules include:

- Authentication
- Emergency Management
- Ambulance Dispatch
- Hospital Management
- Pharmacy Management
- Hazard Reporting
- Notification System

---

## 3. AI & Decision Layer

AI services provide intelligent decision-making.

Features:

- Hospital Recommendation
- Ambulance Routing
- Emergency Severity Detection
- Speech-to-Text
- Language Translation
- AI Health Chatbot

---

## 4. Database Layer

Stores:

- Users
- Hospitals
- Ambulances
- Doctors
- Emergency Requests
- Medical Equipment
- Hazard Reports

MongoDB is used as the primary database.

---

## 5. External Services Layer

Integrations include:

- Google Maps API
- Twilio SMS API
- OpenAI / Gemini API
- Future Government Emergency Services

---

## Architecture Flow

Patient

↓

Emergency SOS

↓

GPS Location

↓

AI Processing

↓

Nearest Ambulance

↓

Hospital Recommendation

↓

Hospital Alert

↓

Live Tracking

↓

Treatment

↓

Hazard Reporting

↓

Government Authority
