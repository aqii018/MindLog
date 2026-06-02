# 📖 JournalApp

[![Java](https://img.shields.io/badge/Java-17-orange)]()
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)]()
[![Redis](https://img.shields.io/badge/Redis-Cache-red)]()
[![JWT](https://img.shields.io/badge/JWT-Secured-blue)]()
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue)]()

A production-ready backend application built using **Spring Boot 3**, **Spring Security 6**, **MongoDB**, **Redis**, **JWT Authentication**, and **Docker**.

JournalApp enables users to securely manage personal journal entries while providing advanced capabilities such as role-based authorization, sentiment analysis, email notifications, text-to-speech generation, weather integration, Redis caching, and cloud deployment.

---

## 🚀 Live Application

**Production URL**

```text
https://journal-app-3fpe.onrender.com
```

---

## ✨ Core Features

### 🔐 Authentication & Authorization

- JWT Authentication
- Spring Security 6
- BCrypt Password Hashing
- Stateless Security Architecture
- Protected REST APIs
- Role-Based Access Control (RBAC)
- ADMIN and USER Roles

### 📓 Journal Management

- Create Journal Entries
- Update Journal Entries
- Delete Journal Entries
- Retrieve Personal Journals
- Sentiment Tracking
- User-Specific Data Isolation

### 👤 User Management

- User Registration
- Secure Login
- Profile Updates
- Password Updates
- Email Preferences
- Sentiment Analysis Preferences

### 👨‍💼 Admin Features

- Create Admin Accounts
- View All Registered Users
- Administrative Operations
- Role-Based Endpoint Protection

### ⚡ Performance & Scalability

- Redis Caching
- Reduced Database Calls
- Faster API Responses
- Improved Application Performance

### 🤖 AI & Utility Services

- Text-to-Speech Generation
- Sentiment Analysis
- Email Notifications
- Weather Information Integration

### ☁️ Deployment & DevOps

- Dockerized Application
- GitHub Actions CI Pipeline
- Render Cloud Deployment
- OpenAPI Documentation

---

## 🏗️ Architecture

```text
Client
   │
   ▼
JWT Authentication
   │
   ▼
Spring Security
   │
   ▼
Controllers
   │
   ▼
Services
   │
 ┌─┴───────────────┐
 ▼                 ▼
Redis Cache     MongoDB
```

---

## 🛠️ Technology Stack

### Backend

- Java 17
- Spring Boot 3
- Spring Security 6
- Spring Data MongoDB
- Spring Cache
- Maven

### Database

- MongoDB Atlas

### Caching

- Redis

### Security

- JWT Authentication
- BCrypt Password Encoding
- Role-Based Access Control

### Documentation

- OpenAPI 3
- Swagger UI

### DevOps

- Docker
- GitHub Actions
- Render

---

## 📂 Project Structure

```text
src
├── main
│   ├── java
│   │   ├── config
│   │   ├── controller
│   │   ├── entity
│   │   ├── enums
│   │   ├── filter
│   │   ├── repo
│   │   ├── service
│   │   ├── cache
│   │   ├── schedular
│   │   ├── utils
│   │   └── JournalApplication
│   │
│   └── resources
│       ├── static
│       └── application.properties
│
└── test
```

---

## 🔑 Authentication

### Register

```http
POST /public/signup
```

Request

```json
{
  "userName": "john",
  "password": "password123",
  "email": "john@example.com"
}
```

---

### Login

```http
POST /public/login
```

Request

```json
{
  "userName": "john",
  "password": "password123"
}
```

Response

```json
{
  "token": "JWT_TOKEN"
}
```

Use the token for protected APIs:

```http
Authorization: Bearer JWT_TOKEN
```

---

## 📓 Journal APIs

### Create Journal Entry

```http
POST /journal
```

```json
{
  "title": "My First Journal",
  "content": "Today was productive.",
  "sentiment": "HAPPY"
}
```

### Get All Journal Entries

```http
GET /journal
```

### Get Journal Entry By ID

```http
GET /journal/id/{id}
```

### Update Journal Entry

```http
PUT /journal/id/{id}
```

### Delete Journal Entry

```http
DELETE /journal/id/{id}
```

---

## 👨‍💼 Admin APIs

### Create Admin

```http
POST /admin/create-admin
```

### View All Users

```http
GET /admin/all-users
```

---

## 🎙️ Text To Speech API

```http
POST /TextToVoice
```

Request

```json
{
  "text": "Hello World",
  "modelId": "voice-model"
}
```

Response

```text
Audio Output
```

---

## ⚡ Redis Caching

Redis is used to cache frequently accessed application data and reduce repeated database queries.

### Benefits

- Faster Response Times
- Reduced MongoDB Load
- Improved Scalability
- Better User Experience

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t journal-app .
```

### Run Docker Container

```bash
docker run -p 8080:8080 journal-app
```

Application will be available at:

```text
http://localhost:8080
```

---

## ⚙️ Environment Variables

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
EMAIL_USERNAME=your_email
EMAIL_PASSWORD=your_email_password
GEMINI_API_KEY=your_api_key
```

---

## 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/sal12321/Journal-Entry-App.git
```

```bash
cd Journal-Entry-App
```

### Build Project

```bash
mvn clean package
```

### Run Application

```bash
java -jar target/*.jar
```

---

## 📚 API Documentation

The application includes OpenAPI documentation and can be explored using Swagger UI or imported into Postman.

---

## 📸 Screenshots

### Swagger Documentation

![Swagger](DBimg/swagger/Screenshot%202025-10-04%20181919.png)

### Redis Caching

![Redis](DBimg/Redis/get.png)

### MongoDB Atlas Integration

![MongoDB](DBimg/storing%20the%20data%20from%20atlas.png)

### SonarQube Analysis

![SonarQube](DBimg/sonarQube%20code%20quaity%20test.png)

---

## 🔒 Security Highlights

- JWT-Based Authentication
- BCrypt Password Hashing
- Role-Based Authorization
- Protected Administrative Endpoints
- Stateless Authentication Flow

---

## 📈 Performance Highlights

- Redis Caching
- Optimized Database Access
- Reduced Response Latency
- Scalable Service Architecture

---

## 🔮 Future Enhancements

- Refresh Token Support
- OAuth2 Authentication
- API Rate Limiting
- Kubernetes Deployment
- Distributed Tracing
- Multi-Factor Authentication (MFA)

---

## 👨‍💻 Author

### Aaqib Alam

Java Backend Developer | Spring Boot Enthusiast

- GitHub: https://github.com/sal12321
- LinkedIn: https://www.linkedin.com/in/aaqib-alam-50929a204/

---

## ⭐ Support

If you found this project useful, consider giving it a star.