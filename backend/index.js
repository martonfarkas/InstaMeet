const mongoose = require('mongoose')

// Import the Express application
const app = require('./app')

// Load environment variables from .env file
require('dotenv').config();

// Set the port to the value from the .env file or default to 3001
const port = process.env.PORT || 3000

// Get the MongoDB URI from the .env file
const MONGODB_URI = process.env.MONGODB_URI

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB') // Log successful connection to MongoDB
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`) // Start the server and log the port
    })
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err) // Log any connection errors
  })