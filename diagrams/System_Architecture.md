# RapidAid System Architecture

## Overview

The System Architecture Diagram illustrates the high-level architecture of the RapidAid platform. It shows how the frontend, backend, database, external services, and users interact to provide an intelligent emergency response system.

```mermaid
flowchart TB

subgraph Users
Patient[👤 Patient]
Ambulance[🚑 Ambulance Driver]
Hospital[🏥 Hospital Admin]
Admin[👨‍💼 System Admin]
end

subgraph Frontend
React[React + Tailwind CSS]
end

subgraph Backend
API[Node.js + Express API]
Auth[JWT Authentication]
AI[AI Recommendation Engine]
Notify[Notification Service]
QR[QR Medical Profile]
Analytics[Analytics Engine]
end

subgraph Database
Mongo[(MongoDB Atlas)]
end

subgraph ExternalServices
Maps[Google Maps API]
Directions[Google Directions API]
Places[Google Places API]
FCM[Firebase Cloud Messaging]
end

Patient --> React
Ambulance --> React
Hospital --> React
Admin --> React

React --> API

API --> Auth
API --> AI
API --> QR
API --> Notify
API --> Analytics
API --> Mongo

AI --> Maps
AI --> Directions
API --> Places
Notify --> FCM
```

## Components

### Frontend
- React
- Tailwind CSS
- Responsive User Interface

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication

### Database
- MongoDB Atlas

### AI Module
- Hospital Recommendation
- Emergency Severity Assessment
- Route Optimization

### External Services
- Google Maps API
- Google Directions API
- Google Places API
- Firebase Cloud Messaging

## Summary

The RapidAid architecture follows a modern three-tier architecture with React as the frontend, Node.js and Express as the backend, MongoDB Atlas as the database, and Google Maps, Firebase, and AI services integrated to deliver real-time emergency response and healthcare coordination.
