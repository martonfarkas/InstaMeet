import mongoose from 'mongoose'

// Import the 'app' module from the 'app.js' file
import app from './app.js'

import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// Set the port to the value from the .env file or default to 3001
const port = process.env.PORT || 3000

// Get the MongoDB URI from the .env file
const MONGODB_URI = process.env.MONGODB_URI

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB') // Log successful connection to MongoDB
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`) // Start the server and log the port
    })
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err) // Log any connection errors
  })