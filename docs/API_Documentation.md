# RapidAid API Documentation

## Overview

The RapidAid backend provides RESTful APIs for managing users, emergency requests, hospitals, ambulances, notifications, analytics, and public hazard reports.

## Base URL

```
http://localhost:5000/api
```

---

# Authentication APIs

## Register User

**POST**

```
/auth/register
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

### Response

```json
{
  "message": "User registered successfully"
}
```

## Login User

**POST**

```
/auth/login
```

Returns a JWT token after successful authentication.

---

# User APIs

## Get User Profile

**GET**

```
/users/profile
```

## Update User Profile

**PUT**

```
/users/profile
```

---

# Emergency APIs

## Create Emergency Request

**POST**

```
/emergency/create
```

## Get Emergency Status

**GET**

```
/emergency/:id
```

## Update Emergency Status

**PUT**

```
/emergency/update/:id
```

---

# Ambulance APIs

## Get Available Ambulances

**GET**

```
/ambulances
```

## Update Ambulance Location

**PUT**

```
/ambulances/location
```

---

# Hospital APIs

## Get Nearby Hospitals

**GET**

```
/hospitals
```

## Update Hospital Resources

**PUT**

```
/hospitals/resources
```

---

# Medical Profile APIs

## Generate QR Medical Profile

**POST**

```
/medical-profile/generate-qr
```

## Get Medical Profile

**GET**

```
/medical-profile/:userId
```

---

# Analytics APIs

## Get Dashboard Statistics

**GET**

```
/analytics/dashboard
```

---

# Hazard Reporting APIs

## Report Public Hazard

**POST**

```
/hazards/report
```

## Get Hazard Reports

**GET**

```
/hazards
```

---

# Notification APIs

## Send Notification

**POST**

```
/notifications/send
```

## Get User Notifications

**GET**

```
/notifications/:userId
```

---

## Authentication

All protected endpoints require a valid JWT token.

Example:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## API Response Format

### Success Response

```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "An error occurred"
}
```

## Summary

The RapidAid REST API enables secure communication between the frontend, backend, database, and external services. It supports authentication, emergency response, ambulance dispatch, hospital management, QR medical profiles, notifications, analytics, and public hazard reporting.
