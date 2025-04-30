# WanderLust 

WanderLust is a web application for managing and exploring travel listings. Users can create, view, edit, and delete listings, leave reviews, and interact with the platform. This project is built using Node.js, Express, MongoDB, and EJS for templating.

---

## Table of Contents
1. [Features](#features)
2. [Setup and Installation](#setup-and-installation)
3. [Dependencies](#dependencies)
4. [Usage](#usage)

---

## Features
- User authentication (Sign up, Login, Logout) using Passport.js.
- CRUD operations for travel listings.
- Review system with ratings and comments.
- Flash messages for user feedback.
- Responsive design using Bootstrap.
- Data validation using Joi.
- Error handling with custom middleware.

---

## Setup-and-installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or on a cloud service like MongoDB Atlas)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd WanderLust
   
2. Install dependencies:
    ```bash
    npm install

3. Set up the MongoDB database:

    Ensure MongoDB is running locally or provide a connection string for a remote database.
    The default connection string is mongodb://127.0.0.1:27017/wanderlust. Update it in app.js if needed.

4. Initialize the database with sample data:
    ```bash
    node init/index.js

5. Start the server:
    ```bash
    node app.js

6. Open your browser and navigate to:
    http://localhost:8080

---

## Dependencies
The project uses the following dependencies:

#### Backend:

1. express: Web framework for Node.js.
2. mongoose: MongoDB object modeling tool.
3. passport: Authentication middleware.
4. passport-local: Local authentication strategy.
5. passport-local-mongoose: Simplifies user authentication with Passport.js.
6. connect-flash: Flash messages for feedback.
7. ejs: Templating engine.
8. ejs-mate: Layout support for EJS.
9. method-override: Allows HTTP verbs like PUT and DELETE.
10. joi: Data validation library.

#### Frontend:

1. bootstrap: CSS framework for responsive design.
2. font-awesome: Icons for UI.

## Usage

### User Roles
#### Authenticated Users:
Create, edit, and delete their own listings.
Leave reviews on listings.
#### Guests:
View all listings.
Sign up or log in to interact with the platform.
### Routes
- /listings  : View all listings.
- /listings/new : Add a new listing (requires login).
- /listings/:id : View a specific listing.
- /listings/:id/edit : Edit a listing (requires ownership).
- /signup : Sign up for an account.
- /login : Log in to an account.
- /logout : Log out of the account.
