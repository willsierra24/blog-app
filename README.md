# Poetry Blog

A simple blog application where users can create, read, update, and delete blog posts. Users can log in with Google and access their dashboard.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (running locally or using a cloud service)
- [Google Cloud Platform account](https://cloud.google.com/) for OAuth credentials

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/poetry-blog.git
    cd poetry-blog
    ```

2. **Install backend dependencies:**

    Navigate to the `api` directory and install the backend dependencies.

    ```bash
    cd api
    npm install
    ```

3. **Install frontend dependencies:**

    Navigate to the `client` directory and install the frontend dependencies.

    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `api` directory with the following content:

    ```env
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    MONGODB_URI=your_mongodb_connection_string
    ```

    Replace `your_google_client_id`, `your_google_client_secret`, and `your_mongodb_connection_string` with your actual values.

## Running the Application

1. **Start the backend server:**

    ```bash
    cd api
    npm start
    ```

    This will start the backend server on [http://localhost:3001](http://localhost:3001).

2. **Start the frontend development server:**

    In a new terminal, navigate to the `client` directory and start the frontend server:

    ```bash
    cd client
    npm start
    ```

    This will start the frontend development server on [http://localhost:3000](http://localhost:3000).

3. **Access the application:**

    Open your browser and go to [http://localhost:3000](http://localhost:3000). You should see the Poetry Blog application running.

## Folder Structure

- **api/**: Contains the backend server code.
  - `models/`: Mongoose models for MongoDB.
  - `routes/`: Express routes for handling API requests.
  - `config/`: Configuration files (e.g., database connection).
  - `server.js`: Entry point for the backend server.

- **client/**: Contains the frontend React application.
  - `src/`: Source code for the React app.
    - `components/`: React components.
    - `redux/`: Redux actions, reducers, and store configuration.
  - `public/`: Static files for the frontend app.
  - `package.json`: Dependencies and scripts for the frontend.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
