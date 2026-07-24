# AI Resume ATS Checker

> **Intelligent Resume Optimization & Applicant Tracking System Scoring**

A full-stack web application that leverages AI to analyze, score, and optimize resumes against Applicant Tracking System (ATS) standards. Get real-time insights, version control, and AI-powered suggestions to maximize your interview callback rate.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Development](#development)
- [License](#license)

---

## 🎯 Overview

The AI Resume ATS Checker is designed to bridge the gap between candidates and recruiters by providing:

- **ATS Compatibility Analysis** - Understand how your resume performs against modern ATS systems
- **AI-Powered Scoring** - Get comprehensive scores based on keyword optimization, formatting, and content quality
- **Intelligent Rewrites** - Receive AI-generated suggestions to improve resume content and ATS compatibility
- **Version History** - Track all changes to your resume with full revision history
- **User Dashboard** - Centralized hub to manage resumes, view analytics, and track progress
- **Secure Authentication** - Enterprise-grade user management with JWT-based authentication

---

## ✨ Features

### Core Capabilities

✅ **Resume Upload & Parsing**
- Support for PDF and text-based resume formats
- Intelligent extraction of resume sections and content

✅ **ATS Scoring System**
- Paste a job description to score and match keywords against that specific role's requirements
- Formatting compatibility assessment
- Content structure analysis
- Industry-specific recommendations

✅ **AI-Powered Insights**
- Powered by Google's Generative AI
- Natural language analysis and suggestions
- Smart rewrite recommendations
- Personalized improvement strategies

✅ **Version Management**
- Complete revision history for each resume
- Side-by-side diff view to compare versions
- Rollback capabilities to previous versions

✅ **User Authentication**
- Secure registration and login
- JWT token-based session management
- Password encryption with bcrypt
- Rate limiting on auth endpoints

✅ **Dashboard Analytics**
- Resume performance metrics
- ATS score trends
- Application readiness indicators

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js (v20+)
- **Framework**: Express.js (v5)
- **Database**: MongoDB (Mongoose v9)
- **AI Integration**: Google Generative AI
- **Authentication**: JWT + Bcrypt
- **Utilities**: Multer (file uploads), PDF-Parse, Diff (version control)
- **Development**: Nodemon, Morgan (logging)

### Frontend
- **Framework**: React (v19)
- **Build Tool**: Vite
- **Routing**: React Router (v7)
- **Styling**: Tailwind CSS (v4)
- **HTTP Client**: Axios
- **State Management**: TanStack React Query (v5)
- **PDF Export**: React PDF Renderer
- **Animations**: Framer Motion
- **UI Components**: Lucide React icons

---

## 📁 Project Structure

```
ai-resume-ats-checker/
├── backend/
│   ├── src/
│   │   ├── config/          # Configuration files (env, db)
│   │   ├── middleware/      # Express middleware (auth, error handling)
│   │   ├── routes/          # API route definitions
│   │   ├── models/          # Mongoose models
│   │   ├── controllers/     # Route controllers
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   └── server.js        # Express app initialization
│   ├── scripts/
│   │   └── seed.js          # Database seeding
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── context/     # React context (Theme, Auth, UI)
│   │   ├── routes/      # React Router configuration
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── api/         # API client
│   │   └── App.jsx      # App root component
│   ├── public/          # Static assets
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **npm**: v10 or higher
- **MongoDB**: Local or Atlas cloud instance
- **Google Generative AI API Key**: [Get your API key](https://makersuite.google.com/app/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amankr32/AI_Resume_ATS_Checker.git
   cd AI_Resume_ATS_Checker
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   cd ..
   ```

---

## 🔧 Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/ai-resume-checker
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-resume-checker

# API Keys
GOOGLE_API_KEY=your_google_generative_ai_key

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# CORS
CORS_ORIGIN=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

### Production Build

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

### Database Seeding

Initialize the database with sample data:
```bash
cd backend
npm run seed
```

---

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate user |
| `POST` | `/api/auth/logout` | Clear user session |

### Resume Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/resumes/upload` | Upload and analyze resume |
| `GET` | `/api/resumes` | Fetch user's resumes |
| `GET` | `/api/resumes/:id` | Get resume details |
| `PUT` | `/api/resumes/:id` | Update resume |
| `DELETE` | `/api/resumes/:id` | Delete resume |

### ATS Scoring Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/insights/score` | Get ATS score for resume |
| `POST` | `/api/insights/analyze` | Detailed analysis and suggestions |
| `POST` | `/api/insights/rewrite` | AI-powered rewrite suggestions |

### Version Control Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/versions/:resumeId` | Get resume versions |
| `GET` | `/api/history/:resumeId` | Get version history |
| `POST` | `/api/versions/revert/:versionId` | Revert to previous version |

### Dashboard Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/dashboard/stats` | Get user analytics |
| `GET` | `/api/dashboard/overview` | Dashboard overview data |

---

## 💻 Development

### Code Organization Principles

Following Google SWE best practices:

- **Separation of Concerns**: Controllers handle requests, services contain business logic, models define data
- **Error Handling**: Comprehensive error handling with meaningful HTTP status codes
- **Validation**: Input validation using Zod schema validation
- **Security**: Rate limiting, CORS configuration, secure password hashing
- **Logging**: Morgan middleware for request logging
- **Configuration**: Environment-based configuration management

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Code Standards

- **Backend**: CommonJS module format, ES2020 compatibility
- **Frontend**: ES6+ modules with React 19 and modern JavaScript
- **Linting**: ESLint configured for both frontend and backend
- **Formatting**: Follow project-specific Prettier configuration

```bash
# Frontend linting
cd frontend
npm run lint
```

---

## 🔒 Security Considerations

- Passwords hashed with bcrypt (cost factor: 10)
- JWT tokens stored in HTTP-only cookies
- CORS properly configured to prevent cross-origin attacks
- Rate limiting on authentication endpoints
- Input validation on all API endpoints
- MongoDB injection prevention through Mongoose
- PDF uploads validated for file type and size

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📞 Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/amankr32/AI_Resume_ATS_Checker/issues)
- Check existing [Discussions](https://github.com/amankr32/AI_Resume_ATS_Checker/discussions)
- Review the [Wiki](https://github.com/amankr32/AI_Resume_ATS_Checker/wiki)

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev)
- [MongoDB & Mongoose](https://www.mongodb.com/docs/mongoose/)
- [Google Generative AI](https://ai.google.dev/)
- [Vite Guide](https://vitejs.dev/)

---

**Built with ❤️ by the Aman**
