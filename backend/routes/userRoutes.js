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

// POST method request handler for updating user status
router.post('/updateStatus', async (req, res) => {
    const { id, statusMessage, durationInMinutes } = req.body
try {
    // Find the user by id
    const user = await user.findById(id)
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    // Update user status
    user.statusMessage = statusMessage
    user.statusExpiresAt = new Date(Date.now() + durationInMinutes * 60000)

    // Save the updated user object back to the database
    await user.save()

    // Send a success response
    res.status(200).json({ message: 'User status updated successfully', user})
} catch (err) {
    console.error('Error updating user status:', err)
    res.status(500).json({ message: err.message })
}
})


export default router