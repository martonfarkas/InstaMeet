// Importing the Express module so you can use it to create an Express application.
const express = require('express')

// Middleware for parsing the body of incoming request objects in a middleware
const bodyParser = require('body-parser')

// Importing Mongoose to interact with a MongoDB database in a more structured and consistent way.
const moongose = require('mongoose')

// Configure your application to use variables stored in a .env file
const dotenv = require('dotenv')

// Handle cross-origin requests.
const cors = require('cors')

// Loads environment variables from a .env file into process.env.
dotenv.config()

// Initializes a new Express application.
const app = express()

// Middleware parses incoming request bodies that are in JSON format.
app.use(bodyParser.json())

// Middleware parses incoming request bodies that are URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware enables Cross-Origin Resource Sharing (CORS) for the application.
app.use(cors())


// Export the app
module.exports = app 