# Google Keep Clone

A full-stack Google Keep Clone built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.

This project replaces browser LocalStorage with a backend REST API and MongoDB database to store and manage notes.

---

## 🚀 Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* Git & GitHub
* Nodemon
* MongoDB Atlas

---

## ✨ Features

* Create notes with Title and Description
* Read and display all notes
* Edit existing notes
* Delete individual notes
* Copy any note with a new timestamp
* Change note background color
* Clear all notes
* Display note creation timestamp
* Display edited timestamp through MongoDB timestamps
* Store notes permanently in MongoDB
* REST API based CRUD operations
* Responsive design for desktop, tablet, and mobile
* Modern and aesthetic user interface

---

## 📁 Project Folder Structure

```text
GoogleKeepClone/
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── create.js
│   │   ├── get.js
│   │   ├── update.js
│   │   ├── delete.js
│   │   ├── copy.js
│   │   └── clear.js
│   │
│   ├── models/
│   │   └── Note.js
│   │
│   ├── routes/
│   │   └── noteRoutes.js
│   │
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── favicon.svg
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 📂 Folder and File Description

### `backend/`

Contains all backend-related code.

### `backend/controllers/`

Contains the logic for different note operations.

* `create.js` → Creates a new note
* `get.js` → Gets all notes
* `update.js` → Updates an existing note
* `delete.js` → Deletes one note
* `copy.js` → Creates a copy of an existing note
* `clear.js` → Deletes all notes

---

### `backend/models/`

Contains the MongoDB data structure.

#### `Note.js`

Defines the Note schema using Mongoose.

A note contains:

* Title
* Description
* Color
* Created timestamp
* Updated timestamp

---

### `backend/routes/`

Contains the REST API routes and connects each route with its controller.

#### `noteRoutes.js`

Handles routes for:

* Create
* Read
* Update
* Delete
* Copy
* Clear all

---

### `backend/server.js`

This is the main backend file.

It:

* Creates the Express server
* Uses middleware
* Connects MongoDB
* Loads note routes
* Starts the server

---

## 🎨 Frontend

### `frontend/index.html`

Contains the structure of the application.

It includes:

* Navbar
* Hero section
* Note creation form
* Color selection
* Add Note button
* Notes collection
* Note action buttons

---

### `frontend/style.css`

Contains all UI styling.

It handles:

* Modern UI design
* Note cards
* Buttons
* Colors
* Hover effects
* Animations
* Responsive design

---

### `frontend/script.js`

Connects the frontend with the backend API.

It handles:

* Creating notes
* Fetching notes
* Updating notes
* Deleting notes
* Copying notes
* Clearing notes
* Selecting note colors
* Displaying notes dynamically

---


## 🗄️ Database

The application uses **MongoDB** to permanently store notes.

Mongoose is used to create the Note schema and communicate with MongoDB.


MongoDB timestamps are used to maintain:

```text
createdAt
updatedAt
```

---

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 1. Start the server

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

---

## 📱 Responsive Design

The application is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

The notes automatically adjust according to the screen size.

---

## 👩‍💻 Build by Developer :

**Najni saikh**
