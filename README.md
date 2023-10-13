# Full-Stack App: Events7

A full-stack web application built with React (Vite), Node.js (Express), and MongoDB (Mongoose). This application allows users to track events. An event must be asigned a name, type, priority and a description (a unique ID is added automaticaly and can not be changed). The events can be later updated and deleted. Events can be sorted by name(alphabetically), by type, by priority(highest priority first) and by the last edited (the last edited first), the default sorting is by last edited.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Routes](#api-routes)
- [Frontend Dependencies](#frontend-dependencies)
- [Backend Dependencies](#backend-dependencies)

## Features

- [List key features and functionalities of your app.]

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed or an active connection to a MongoDB database (e.g., MongoDB Atlas)
- Git (optional, but recommended)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd Events7

   ```

2. # Frontend

   cd Event7-FrontEnd
   npm install
   npm run dev

   # Backend

   cd server
   npm install
   Create a .env file in the server directory with the following variables:
   PORT=3000 (optional)
   MONGO_URI=your-mongodb-atlas-connection-string

   npm start

## API Routes

The API routes for this application are as follows:

- **GET Route: Fetch Events**

  - URL: `http://localhost:5000/api/v1/events?sortBy=${sortBy}`

- **POST Route: Create Event**

  - URL: `http://localhost:5000/api/v1/events`

- **PATCH Route: Update Event**
  - URL: `http://localhost:5000/api/v1/events/{id}`
- **DELETE Route: Delete Event**
  - URL: `http://localhost:5000/api/v1/events/{id}`

## Frontend Dependencies

- [React Hook Form](https://react-hook-form.com/): Form validation library for React.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction): Toast notifications for React.

## Backend Dependencies

- [Express](https://expressjs.com/): Web application framework for Node.js.
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors): Async/await error handling for Express.
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit): Rate limiting middleware for Express.
- [Helmet](https://helmetjs.github.io/): Security middleware for Express.
- [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [Date-fns](https://date-fns.org/): Date utility library for JavaScript.
- [Cors](https://www.npmjs.com/package/cors): Cross-Origin Resource Sharing middleware for Express.
- [HTTP Status Codes](https://www.npmjs.com/package/http-status-codes): Human-friendly HTTP status code descriptions.
- [Mongoose](https://mongoosejs.com/): MongoDB Object Data Modeling (ODM) library.
- [Mongoose Error Formatter](https://www.npmjs.com/package/mongoose-error-formatter): Formats Mongoose validation errors.
- [Morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware for Express.
- [Nodemon](https://nodemon.io/): Development tool to monitor for changes and automatically restart the server.
- [XSS Clean](https://www.npmjs.com/package/xss-clean): Middleware for Express to sanitize user inputs.

**Author**: Tadej Jarc
