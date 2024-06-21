import { Router } from 'express'
import { getOneUser, addUser } from '../controllers/userControllers.js' // Import user controller functions

const router = Router()

// CRUD request handlers for 'users' collection

// GET method request handler for retrieving a single user based on their '_id' in the users collection.
router.get('/:id', getOneUser)

// POST method request handler for adding a new user to the users collection.
router.post('/', addUser)


export default router