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
        console.error('Error fetching user:', err)
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
        console.error('Error creating user:', err)
        res.status(400).json({ message: err.message }) // Send error message if any
    }
}

// Handler to update user location and radius
export const updateUserLocation = async (req, res) => {
    try {
        const { id, latitude, longtitude, radius, isActive } = req.body // Extract data from request body
        const user = await findByIdAndUpdate(
            id,
            {
                location: {
                    type: 'Point',
                    coordinates: [longtitude, latitude], // Set new coordinates
                },
                radius,
                isActive
            { new: true } // Return the updated document
            )
        if (!user) {
            return res.status(404).json({ message: 'User not found' }) // Return 404 if not found
        }
        res.json(user)
            } catch (err) {
                console.error('Error updating your location:', err)
                res.status(500).json({ message: err.message }) // Return 500 if an error occurs
            }
    }

    // Handler to get available users within a specified radius
    export const getAvailableUsers = async (req, res) => {
        try {
            const { latitude, longtitude, radius } = req.query // Extract query parameters
            const availableUsers = await User.find({
                isActive: true, // Only find active users
                location: {
                    $egoWithin: {
                        $centerSphere: [
                            [longtitude, latitude], // Center point
                            radius / 6378100 // Convert radius to radians (Earth's radius in meters)
                        ]
                    }
                }
            })
            res.json(availableUsers) // Return available users
        } catch (err) {
            console.error('Error fetching available users:', err)
            res.status(500).json({ message: err.message }) // Return 500 if an error occurs
        }
    }
