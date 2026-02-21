# Luxe Nails Backend Architecture

This document outlines the folders and files within the `backend` directory of the Luxe Nails project, detailing their specific purposes and how they fit into the overall architecture.

## Root Directory

These files lay the foundation for the entire Node.js server, handling environment variables, dependency management, and the main Express server instantiation.

| File Name               | Purpose                                                                                                                                                                                                           |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`server.js`**         | The main entry point of the Node.js Express application. It sets up the server, configures middleware (CORS, JSON parsing), connects the database, centralizes error handling, and registers all base route URLs. |
| **`.env`**              | Contains sensitive environment variables, such as the MongoDB connection string, JWT secrets, and the port the server runs on.                                                                                    |
| **`package.json`**      | Manages the project's Node.js dependencies (Express, Mongoose, bcryptjs) and defines NPM scripts.                                                                                                                 |
| **`package-lock.json`** | Locks down the exact version of all dependencies to ensure consistent environments across machines.                                                                                                               |
| **`appts.json`**        | A static JSON file used for seeding or storing mock appointment data during development.                                                                                                                          |

---

## Architecture Folders

The backend separates concerns into distinct directories to keep business logic maintainable and readable.

### 1. `config/`

This folder contains configuration scripts used to connect the server to external services and the database.

| File Name   | Purpose                                                                                               |
| :---------- | :---------------------------------------------------------------------------------------------------- |
| **`db.js`** | Houses the `connectDB()` logic used to establish a connection to the MongoDB database using Mongoose. |

### 2. `models/`

This folder defines the MongoDB Mongoose schemas. These files dictate the exact data structure and validation rules for documents stored in the database collections.

| File Name            | Purpose                                                                                                                                                   |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`User.js`**        | The schema for all users (Clients, Artists, Admins). Includes fields for authentication, contact info, and role-specific data (artist skills/experience). |
| **`Appointment.js`** | The schema for bookings. Links a client and an artist, stores the selected services, scheduled date/time, total price, and status.                        |
| **`Service.js`**     | The schema for individual nail services (e.g., Gel Polish, Acrylics), including their names, descriptions, and base prices.                               |
| **`Gallery.js`**     | The schema for portfolio/gallery images, storing the image URLs, titles, target categories, and visibility settings.                                      |
| **`Message.js`**     | The schema for storing "Contact Us" inquiries and messages submitted by users on the frontend.                                                            |

### 3. `routes/`

This folder defines the Express router endpoints. These files map HTTP verbs (GET, POST, PUT, DELETE) and URL paths to their corresponding controller functions.

| File Name                  | Purpose                                                                                         |
| :------------------------- | :---------------------------------------------------------------------------------------------- |
| **`authRoutes.js`**        | Endpoints for user registration, login, and authentication.                                     |
| **`userRoutes.js`**        | Endpoints for retrieving and updating user profiles.                                            |
| **`adminRoutes.js`**       | Endpoints for admin-specific actions (e.g., retrieving total dashboard statistics).             |
| **`artistRoutes.js`**      | Endpoints for retrieving the list of artists, their specific profiles, and available schedules. |
| **`appointmentRoutes.js`** | Endpoints for the booking flow—creating new appointments and updating status.                   |
| **`serviceRoutes.js`**     | Endpoints for CRUD operations on salon services.                                                |
| **`galleryRoutes.js`**     | Endpoints for uploading and fetching gallery showcase images.                                   |
| **`messageRoutes.js`**     | Endpoints for submitting and managing contact form messages.                                    |

### 4. `controllers/`

This folder contains the core business logic. Controllers receive requests from the routes, interpret the data, interact with the Mongoose models, and send JSON responses back to the frontend.

| File Name                      | Purpose                                                                                                                          |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **`authController.js`**        | Handles user authentication, hashing passwords, and generating JSON Web Tokens (JWTs).                                           |
| **`userController.js`**        | Logic for fetching and manipulating user account information.                                                                    |
| **`adminController.js`**       | Retrieves and aggregates high-level stats for the admin dashboard (e.g., total clients, workers, pending requests).              |
| **`artistController.js`**      | Logic for retrieving lists of artists, their portfolio details, and handling specific queries.                                   |
| **`appointmentController.js`** | The core logic for handling the booking process, verifying availability, linking users to services, and updating booking states. |
| **`serviceController.js`**     | Logic for adding, editing, and deleting the services offered by the salon.                                                       |
| **`galleryController.js`**     | Logic for saving gallery image records and serving them by category.                                                             |
| **`messageController.js`**     | Handles incoming messages from the frontend contact form and allows admins to manage them.                                       |

### 5. `middleware/`

This folder contains custom Express middleware functions that intercept requests _before_ they reach the controllers, usually for validation or security checks.

| File Name               | Purpose                                                                                                                                                                           |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`authMiddleware.js`** | Defines the `protect` function to verify incoming JWT tokens, ensuring users are logged in before accessing protected routes. Attachs the logged-in user to the incoming request. |
| **`roleMiddleware.js`** | Defines the `restrictTo` function to check the authenticated user's role (e.g., checking if `req.user.role === 'admin'`) before allowing access to sensitive endpoints.           |
