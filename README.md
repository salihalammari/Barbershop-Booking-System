# Barbershop Booking Application
The Barbershop Booking Application is a simple and user-friendly full-stack application for managing barbershop appointments. It enables customers to browse available services, book appointments, and receive confirmation for successful bookings. Built with Node.js, Express, MongoDB, and EJS, this project showcases a modern, responsive design and a well-structured project setup.

This application emphasizes separation of concerns, scalability, and containerization using Docker for easy deployment.

## Project Structure
```
barbershop-booking/
  ├── views/
  │     ├── index.ejs          # Home page where users can book appointments
  │     └── success.ejs        # Success page displayed after successful booking
  ├── public/
  │     └── style.css          # CSS file for styling the application
  ├── node_modules/            # Node.js modules (created after running npm install)
  ├── app.js                   # Main entry point for the application
  ├── package.json             # Project metadata and dependencies
  └── Dockerfile               # Docker configuration for containerization

```

### ✨ Features

. Service Management: Easily create, read, update, and delete barbershop services.

. Appointment Booking: Book appointments via a clean, user-friendly interface.

. Database Persistence: Store and manage bookings in a MongoDB database.

. Responsive Design: Mobile-friendly design with a modern, minimalist aesthetic.

. Docker Support: Containerization support for easy setup and deployment.

. Environment Configuration: Supports environment variables for easy configuration.

. Error Handling: Custom error messages and status codes for API endpoints.

### 📥 Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v16+)
- MongoDB
- Docker (optional)

### Environment Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/barbershop-booking.git
cd barbershop-booking

```
2. Install dependencies for client and server
```bash
npm install

```
3. Set up environment variables
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/barbershop-booking
```
4. Run the application
```bash
npm start
```
5. View the Application Open your browser and navigate to:

```bash
http://localhost:3000
```
created a comprehensive full-stack Barbershop Booking Application with the following components:

### 🚀 Usage

Once the app is running, users can:
- Browse the available services.
- Select a service and book an appointment.
- Receive a confirmation message on the success.ejs page.
- View the design and layout using style.css.

Admins can modify services and bookings using backend controllers.

### 📂 Project Structure Details

- views/: Contains EJS templates **(index.ejs** and **success.ejs)** for rendering pages.
- public/: Static assets (like style.css) are stored here.
- app.js: The main entry point of the application, where routes, middleware, and database connections are defined.
- package.json: Contains metadata for the project, such as dependencies and scripts.
- Dockerfile: Configuration file to containerize the application for deployment.

### 🔧 Backend

### Database
The MongoDB database is used to store:

- Bookings: Stores details of customer appointments.
- Services: Manages available barbershop services.
The MONGO_URI in the .env file points to the MongoDB instance. You can use MongoDB Atlas for a cloud-based option or install it locally.

### 🎨 Frontend

The front-end is built with EJS templates and CSS for styling. Key files include:
- index.ejs: Main landing page where users can book appointments.
- success.ejs: Confirmation page displayed after a successful booking.
- style.css: Custom styles for the application.

The design is responsive, ensuring a great experience on both desktop and mobile devices.

### Additional Configuration

Docker Compose for containerization
Environment variable support

