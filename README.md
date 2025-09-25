🍽️ Meal Planner Backend (NestJS)
<p align="center"> <a href="https://nestjs.com/" target="_blank"> <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /> </a> </p> <p align="center"> A backend API built with <a href="https://nestjs.com/" target="_blank">NestJS</a> for managing user authentication, profile data, and meal planning. </p>
✨ Features

Authentication: User signup & login with JWT-based authentication.

User Management: Retrieve and update user profile data.

Meal Planner API: Create, update, delete, and fetch meals for a user.

API Documentation: Interactive Swagger docs available at /api/docs.

Built with NestJS + TypeScript, following a clean modular architecture.

📦 Project Setup
# Install dependencies
$ npm install

Running the Application
# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production
$ npm run start:prod

🧪 Testing

# Unit tests
$ npm run test

# End-to-end tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov

📚 API Endpoints
🔐 Authentication

POST /auth/signup → Register a new user

POST /auth/login → Login and receive JWT

👤 Users

GET /users/me → Get logged-in user data

PATCH /users/me → Update user profile
🍲 Meals
Get /diet → Get meal data

📖 API Documentation

Swagger documentation is available at:
http://localhost:3000/api/docs

⚙️ Environment Variables

Create a .env file in the project root with the following values:
PORT=3000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
