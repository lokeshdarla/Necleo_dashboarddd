# Necleo Dashboard

## Overview
This project is a full-stack web application built with React.js for the frontend and Express.js for the backend. It utilizes TypeScript for both the client and server codebase. The application provides basic CRUD operations.


## Technologies Used
- React.js
- Express.js
- TypeScript
- MongoDB

## Sections:
1. [Prerequisites](#prereq)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [Projects API](#projects-api)

---

### Prerequisites {#prereq}
- Node.js installed on your local machine

### Installation {#installation}
1. Clone the repository:
   ```bash
   git clone https://github.com/lokeshdarla/Necleo_dashboarddd.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Necleo_dashboarddd
   ```
3. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Usage  {#usage}
1. Start the server:
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:8000` by default.
2. Start the client:
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173` by default.

## Folder Structure {#folder-structure}
```
project-name/
│
├── client/              # Frontend codebase
│   ├── public/
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Application pages
│       ├── App.tsx      # Main application component
│       └── index.tsx    # Entry point for the React application
│
└── server/              # Backend codebase
    ├── src/
    │   ├── controllers/ # Express controllers
    │   ├── routes/      # Express routes
    │   ├── models/      # Data models
    │   └── server.ts    # Entry point for the Express application
    │
    └── .env             # Environment variables
```


# Necleo Projects API {#projects-api}

## Overview
The Necleo Projects API provides endpoints to perform CRUD operations (Create, Read, Update, Delete) on projects. It allows users to manage projects with details such as ID, author, dimensions, URLs, title, and description.

## Base URL
The base URL for accessing the API is `http://localhost:8000/projects`.

## Endpoints

### GET /projects
Retrieves all projects stored in the database.

### GET /projects/:id
Retrieves a specific project based on the provided ID.

### POST /projects
Creates a new project with the provided data. Requires a JSON payload with the following fields:
- `id`: Unique identifier for the project.
- `author`: Name of the project's author.
- `width`: Width dimension of the project.
- `height`: Height dimension of the project.
- `url`: URL associated with the project.
- `download_url`: URL for downloading the project.
- `title`: Title of the project.
- `description`: Description of the project.

Example Request Body:
```json
{
    "id": "323",
    "author": "Lokesh",
    "width": 2,
    "height": 3,
    "url": "askdfjbsdgf",
    "download_url": "wkefbsdhfb",
    "title": "This is a title",
    "description": "This is a description"
}
```

### PUT /projects/:id
Updates an existing project with the provided data. Requires a JSON payload similar to the one used in the POST request.

### DELETE /projects/:id
Deletes the project with the specified ID.

## Error Handling
The API returns appropriate HTTP status codes along with error messages in case of any issues during request processing.

