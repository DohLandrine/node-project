# NodeProjects

This is a Node.js project that provides a RESTful API for managing ninjas with geolocation data. It also includes a simple HTML page to navigate to different types of quotes.

## Features

- RESTful API for CRUD operations on ninjas.
- Geolocation support for finding ninjas near a specific location.
- Simple HTML page for navigating to different types of quotes.

## Project Structure
Collecting workspace informationHere is a `README.md` file for your project:

```markdown
# NodeProjects

This is a Node.js project that provides a RESTful API for managing ninjas with geolocation data. It also includes a simple HTML page to navigate to different types of quotes.

## Features

- RESTful API for CRUD operations on ninjas.
- Geolocation support for finding ninjas near a specific location.
- Simple HTML page for navigating to different types of quotes.

## Project Structure

node-project/
├── index.js               # Main entry point of the application
├── package.json           # Project metadata and dependencies
├── model/
│   └── ninja.js           # Mongoose schema and model for ninjas
├── routes/
│   └── api.js             # API routes for managing ninjas
├── views/
│   └── index.html         # HTML page for navigating quotes
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or remotely)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd node-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server if not already running:
   ```bash
   mongod
   ```

## Usage

### Start the Server

To start the server, run:

```bash
npm start
```

The server will run at `http://localhost:3000`.

### Development Mode

To start the server in development mode with live reloading, run:

```bash
npm run dev
```

### API Endpoints

#### Base URL: `/api`

- **GET** `/ninjas`: Get a list of ninjas near a specific location.
  - Query Parameters:
    - `lng`: Longitude of the location.
    - `lat`: Latitude of the location.

- **POST** `/ninjas`: Add a new ninja.
  - Request Body:
    ```json
    {
      "name": "Ninja Name",
      "rank": "Rank",
      "available": true,
      "geometry": {
        "type": "Point",
        "coordinates": [longitude, latitude]
      }
    }
    ```

- **PUT** `/ninjas/:id`: Update a ninja by ID.
  - Request Body: Same as POST.

- **DELETE** `/ninjas/:id`: Delete a ninja by ID.

## Error Handling

If an error occurs during API requests, the server will respond with a status code of `422` and a JSON object containing the error message.

## Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
- [Body-Parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing request bodies.

## Author

Doh Landrine

## License

This project is licensed under the ISC License.
