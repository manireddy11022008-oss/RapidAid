## Overview

The Entity Relationship (ER) Diagram represents the database structure of the RapidAid system. It defines the entities, their attributes, and the relationships between them.

   mermaid
erDiagram

USER ||--|| MEDICAL_PROFILE : has
USER ||--o{ EMERGENCY_REQUEST : creates
USER ||--o{ HAZARD_REPORT : submits
USER ||--o{ NOTIFICATION : receives

AMBULANCE ||--o{ EMERGENCY_REQUEST : assigned_to

HOSPITAL ||--o{ DOCTOR : employs
HOSPITAL ||--o{ EQUIPMENT : owns
HOSPITAL ||--o{ EMERGENCY_REQUEST : receives

EMERGENCY_REQUEST ||--|| ANALYTICS : generates

USER {
    string userId
    string name
    string email
    string phone
    string password
    string role
}

MEDICAL_PROFILE {
    string bloodGroup
    string allergies
    string medicalConditions
    string medications
    string qrCode
}

AMBULANCE {
    string ambulanceId
    string driverName
    string vehicleNumber
    string status
    string currentLocation
}

HOSPITAL {
    string hospitalId
    string hospitalName
    string address
    int availableICUBeds
    int availableDoctors
}

DOCTOR {
    string doctorId
    string doctorName
    string specialization
    string availability
}

EQUIPMENT {
    string equipmentId
    string equipmentName
    int quantity
}

EMERGENCY_REQUEST {
    string requestId
    string emergencyType
    string severity
    string patientLocation
    string status
}

HAZARD_REPORT {
    string reportId
    string issueType
    string location
    string status
}

NOTIFICATION {
    string notificationId
    string message
    string status
}

ANALYTICS {
    string analyticsId
    int responseTime
    string hospitalAssigned
    string ambulanceAssigned
}



## Main Entities

- User
- Medical Profile
- Emergency Request
- Ambulance
- Hospital
- Doctor
- Equipment
- Hazard Report
- Notification
- Analytics

---

## Summary

The ER Diagram serves as the blueprint for the MongoDB database. These entities and relationships will be implemented during the backend development phase.
