# Online Vehicle Repair System (OVRS)

A comprehensive web-based system for managing vehicle repair services, allowing customers to book appointments, track repair status, and manage their vehicle maintenance history.

## Features

- User Registration and Authentication
- Vehicle Information Management
- Online Service Booking and Scheduling
- Real-time Repair Status Tracking
- Service Provider Management
- Review and Rating System
- Admin Dashboard
- Notification System

## Tech Stack

### Frontend
- React.js
- Material-UI
- Redux for State Management
- Axios for API calls

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- MySQL Database
- Spring Data JPA

## Prerequisites

- Node.js (v14 or higher)
- Java JDK 11 or higher
- MySQL 8.0 or higher
- Maven

## Getting Started

1. Clone the repository
2. Set up the backend:
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```
3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Project Structure

```
ovrs/
├── frontend/           # React frontend application
├── backend/           # Spring Boot backend application
└── README.md         # Project documentation
```

## License

This project is licensed under the MIT License.