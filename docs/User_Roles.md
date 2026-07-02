## Overview

RapidAid follows a **Role-Based Access Control (RBAC)** model to ensure that users can access only the features relevant to their responsibilities. The system has three primary user roles: Patient, Hospital Administrator, and System Administrator.

---

# 1. Patient/User

The Patient Portal is designed for users seeking emergency medical assistance and healthcare services.

## Features

- Register and log in
- One-Tap Emergency SOS
- Live GPS location sharing
- Real-time ambulance tracking
- Emergency status updates
- Nearby hospitals and pharmacies
- Online doctor consultation
- Emergency contact notifications
- Emergency history
- Report public hazards

---

# 2. Hospital Administrator

The Hospital Administrator manages hospital resources and responds to emergency requests.

## Features

- Manage ICU bed availability
- Update emergency bed status
- Manage doctor availability
- Update medical equipment status
- Receive incoming emergency alerts
- View ambulance Estimated Time of Arrival (ETA)
- Prepare for incoming patients
- Manage hospital emergency resources

---

# 3. System Administrator

The System Administrator oversees the entire RapidAid platform.

## Features

- Manage users
- Manage hospitals
- Monitor emergency requests
- View analytics and reports
- Manage public hazard reports
- Maintain system security
- Configure system settings
- Monitor platform performance

---

# Access Control

| Feature | Patient | Hospital Admin | System Admin |
|---------|:-------:|:--------------:|:------------:|
| Register/Login | ✅ | ✅ | ✅ |
| Emergency SOS | ✅ | ❌ | ❌ |
| Live Tracking | ✅ | ✅ | ✅ |
| Hospital Resource Management | ❌ | ✅ | ✅ |
| User Management | ❌ | ❌ | ✅ |
| Analytics | ❌ | Limited | ✅ |
| Hazard Reporting | ✅ | View | ✅ |

---

# Security

RapidAid uses Role-Based Access Control (RBAC) and secure authentication to protect sensitive information and ensure users can access only the features assigned to their role.
