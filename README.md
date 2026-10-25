# 🏡 StaySphere - Student & Young Professional PG Discovery Platform

> A full-stack web application designed for students and young professionals across India to discover verified PGs, hostels, and shared flats with immersive 360-degree virtual room tours, individual bed reservation, and transparent rent calculations.

---

## 🌟 Key Features

1. **Modern Responsive UI**: Styled with Tailwind CSS, Lucide icons, responsive navigation, and intuitive student hub filtering.
2. **Interactive 360° Virtual Tours**: Powered by Pannellum for high-resolution equirectangular room navigation, study desk inspection, and spatial awareness before visiting.
3. **Room & Individual Bed Availability**: Detailed inventory of every room (Single, Double, Triple) and individual beds (Bed A, Bed B). Shows live vacancy and occupied badges.
4. **Dynamic Rent Calculator**: Real-time monthly breakdown taking tenure discounts (5% to 15% off), meal plans (Breakfast, Lunch, Dinner), and add-on services into account. Calculates exact total due on move-in.
5. **Bed Reservation & Visit Scheduling**:
   - Zero-brokerage bed booking with printable voucher / receipt.
   - Physical property inspection visit scheduling with time slots and SMS notification pass.
6. **Strict Duplicate & Overlap Prevention (HTTP 409)**: Prevents double-booking the same bed for overlapping dates.
7. **Role-Based Portals**:
   - **Student Dashboard**: My room/bed bookings, scheduled visits, KYC status, printable vouchers.
   - **Owner Dashboard**: Manage listings, toggle bed occupancy, review incoming reservations, publish new stays.
   - **Administrator Dashboard**: Safety audit, host verification toggle, user directory, global booking ledger.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, Tailwind CSS, React Router DOM v6, Axios, Lucide React, Pannellum
- **Backend**: Node.js, Express.js, JWT authentication, bcryptjs password hashing, REST APIs
- **Database**: MongoDB with Mongoose schemas, compound indexes, and validation
- **Testing**: Automated end-to-end integration test suite covering auth, search, tours, bookings, and overlap prevention

---

## 🚀 Quick Start (Beginner Friendly)

### Prerequisites
- **Node.js** (v18 or higher recommended; currently tested on v26)
- **MongoDB** (running locally or via MongoDB Atlas / Memory Server)

### 1. Install & Run Everything
From the root `StaySphere` directory:

```bash
# Start both Backend (Port 5001) and Frontend (Port 5173) simultaneously:
npm run dev
```

The application will be live at:
- **Frontend App**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5001](http://localhost:5001)
- **Health Check**: [http://localhost:5001/api/health](http://localhost:5001/api/health)

---

## 🔑 Pre-Seeded Test Credentials

You can sign in or register with any account, or test using the pre-seeded accounts:

| Role | Email | Password | Access / Capabilities |
| :--- | :--- | :--- | :--- |
| **Student** | `student@staysphere.com` | `Student123!` | Explore stays, 360° tour, book beds, schedule visits, student dashboard |
| **Property Owner** | `owner@staysphere.com` | `Owner123!` | Host portal, manage listings, toggle bed occupancy, view tenant bookings |
| **Administrator** | `admin@staysphere.com` | `Admin123!` | Superadmin console, host verification audits, user directory, audit ledger |

---

## 🧪 Running Automated Tests

To run the automated integration test suite:

```bash
npm test
```

The test suite verifies:
1. Health check endpoint status
2. User registration and bcrypt password hashing
3. User login and JWT authentication token generation
4. Property search and city filters
5. 360° virtual tour configuration integrity
6. Bed booking creation and reference generation
7. **Overlapping / duplicate booking rejection (returns HTTP 409 Conflict)**
8. Physical visit scheduling
9. Student dashboard bookings query
10. Property host bed occupancy toggle

---

## 📁 Project Directory Structure

```text
StaySphere/
├── package.json               # Root scripts (unified start, dev, test)
├── start-all.js               # Concurrently runs backend & frontend
├── README.md
├── frontend/                  # React + Vite + Tailwind CSS Application
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── PropertyCard.jsx
│       │   ├── PannellumViewer.jsx    # 360° virtual tour component
│       │   ├── BedAvailabilityGrid.jsx # Room and bed inventory
│       │   ├── RentCalculator.jsx     # Dynamic rent breakdown
│       │   ├── BookingModal.jsx       # Bed reservation modal
│       │   └── ScheduleVisitModal.jsx # In-person visit appointment
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── PropertyList.jsx
│       │   ├── PropertyDetail.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── StudentDashboard.jsx
│       │   ├── OwnerDashboard.jsx
│       │   ├── AdminDashboard.jsx
│       │   └── NotFound.jsx
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── services/
│       │   └── api.js
│       └── data/
│           └── mockProperties.js
└── backend/                   # Node.js + Express + Mongoose REST API
    ├── package.json
    ├── .env
    └── src/
        ├── config/
        │   └── db.js          # MongoDB connection manager
        ├── models/
        │   ├── User.js        # User model with bcrypt pre-save hook
        │   ├── Property.js    # Property, Room, Bed, 360 tour schema
        │   ├── Booking.js     # Booking schema with overlap indexes
        │   └── Visit.js       # Visit appointment schema
        ├── middleware/
        │   └── auth.js        # JWT protect & role authorize guard
        ├── controllers/
        │   ├── authController.js
        │   ├── propertyController.js
        │   ├── bookingController.js
        │   └── visitController.js
        ├── routes/
        │   ├── authRoutes.js
        │   ├── propertyRoutes.js
        │   ├── bookingRoutes.js
        │   └── visitRoutes.js
        ├── seed.js            # Initial data seeder
        ├── server.js          # Express app entry
        └── tests/
            └── runTests.js    # Automated integration test runner
```
