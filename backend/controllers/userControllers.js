import User from '../models/userModel.js'; // Import the User model

// Handler to get one user by ID
export const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id) //Find user by id
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message }) // Send error message if any
    }
}

// Handler to add a new user
export const addUser = async (req, res) => {
    try {
        const newUser = await new User(req.body) // Create a new User instance
        await newUser.save() // Save the new user to the database
        res.status(201).json(newUser) // Send the new user as json
    } catch (err) {
        res.status(400).json({ message: err.message }) // Send error message if any
    }
}

