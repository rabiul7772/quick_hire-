# QuickHire - Modern Job Board Platform

![QuickHire Banner](./client/public/quick%20hire%20banner.png)

QuickHire is a professional job board application designed to connect employers with job seekers through a seamless, premium interface. Built with a focus on high-performance engineering standards, the project features a decoupled architecture with a TypeScript-based ESM backend and a modern React frontend.

## 🔗 Live Demo

- **Frontend**: [https://quick-hire-rabiul.vercel.app](https://quick-hire-rabiul.vercel.app)
- **Backend API**: [https://quick-hire-server-f8ja.onrender.com](https://quick-hire-server-f8ja.onrender.com)

---

## 🚀 Key Features

### For Job Seekers

- **Dynamic Job Discovery**: Search and filter jobs by category, location, and keywords.
- **Seamless Applications**: One-click application process with real-time feedback.
- **Mobile-Responsive UI**: Fully optimized layout for professional job hunting on the go.

### For Employers (Admin)

- **Job Management**: Full capabilities to manage job postings.
- **Admin Dashboard**: Specialized views for monitoring and organizing listings.
- **Secure Access**: Role-based access control for administrative tasks.

---

## 🛠️ Technical Stack

### Frontend (Client)

- **React 19** with **Vite** for optimized builds.
- **TypeScript** configured for type safety and modern standards.
- **Tailwind CSS v4** for a high-end, dynamic design system.
- **TanStack Query (React Query)** for robust state management and data fetching.
- **React Hook Form + Zod** for industry-standard form validation.
- **Lucide React** for consistent, high-quality iconography.

### Backend (Server)

- **Node.js** with **Express**.
- **TypeScript** configured in **Full ESM Mode** for modern standards.
- **MongoDB + Mongoose** for scalable, document-oriented data storage.
- **JWT + Bcryptjs**: For secure, stateless authentication.

---

## 📂 Folder Structure

### Backend (`/server`)

- `src/config`: Environment variable and system configuration.
- `src/controllers`: Request handling and business logic.
- `src/database`: Database connection and optimization.
- `src/middleware`: Authentication, validation, and error-handling.
- `src/models`: Mongoose schemas and data models.
- `src/routes`: API endpoint definitions.
- `src/validators`: Zod schemas for request validation.

### Frontend (`/client`)

- `src/components`: Reusable UI pieces and complex forms.
- `src/context`: Global state (Auth, UI states).
- `src/pages`: Main application views and route components.
- `src/services`: API abstraction layer and data fetching.
- `src/schemas`: Centralized validation logic for various forms.
- `src/utils`: Utility functions and helper classes.

---

## 🏗️ Engineering Standards

- **Component-Driven Development**: Highly reusable atomic UI components (Button, Input, Select, etc.).
- **Strict TypeScript**: Enforced type safety across both frontend and backend to minimize runtime errors.
- **Clean Architecture**: Logical separation of concerns between controllers, routes, models, and services.
- **Design System**: A central `index.css` design system ensuring UI consistency across the platform.

---

## 💻 Local Setup

### Prerequisites

- Node.js (v20+)
- MongoDB (Local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/rabiul7772/quick_hire-.git
cd quick_hire
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

Start the development server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_BACKEND_BASE_URL=http://localhost:5000/api/v1
```

Start the development server:

```bash
npm run dev
```

---

## ✍️ Author

**Rabiul**

- GitHub: [@rabiul7772](https://github.com/rabiul7772)
- Built with ❤️ for better job management.
