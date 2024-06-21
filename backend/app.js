// Importing the Express module so you can use it to create an Express application.
import express from "express"

// Middleware for parsing the body of incoming request objects in a middleware
import bodyParser from 'body-parser'

// Importing Mongoose to interact with a MongoDB database in a more structured and consistent way.
import moongose from 'mongoose'

// Configure your application to use variables stored in a .env file
import dotenv from 'dotenv'

// Handle cross-origin requests.
import cors from 'cors'

import userRoutes from "./routes/userRoutes.js"

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


// Gets routes from userRoutes.js
app.use('api/user', userRoutes)

// GET method default route handler.
app.get('/', (req, res) => {
    res.send({info: 'InstaMeet-api'})
})


// Export the app
export default app