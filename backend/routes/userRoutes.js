import { Router } from 'express'
import { getOneUser, addUser, updateUserLocation, getAvailableUsers } from '../controllers/userControllers.js' // Import user controller functions

const router = Router()

// CRUD request handlers for 'users' collection

// GET method request handler for retrieving a single user based on their '_id' in the users collection.
router.get('/:id', getOneUser)

// POST method request handler for adding a new user to the users collection.
router.post('/', addUser)

// POST request handler for updating user location and radius
router.post('/updateLocation', updateUserLocation)

// GET request handler for getting available users within a specified radius
router.get('/availableUsers', getAvailableUsers)


export default router