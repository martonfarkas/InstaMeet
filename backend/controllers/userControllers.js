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
export const updateUserProfile = async (req, res) => {
    try {
        const { id, age, minAge, maxAge, latitude, longtitude, radius, isActive } = req.body // Extract data from request body
        const user = await findByIdAndUpdate(
            id,
            {
                age,
                radius,
                ageGroup: { minAge, maxAge },
                location: {
                    type: 'Point',
                    coordinates: [longtitude, latitude], // Set new coordinates
                },
                isActive
            },
            { new: true } // Return the updated document
            )
        if (!user) {
            return res.status(404).json({ message: 'User not found' }) // Return 404 if not found
        }
        res.json(user)
            } catch (err) {
                console.error('Error updating user profile:', err)
                res.status(500).json({ message: err.message }) // Return 500 if an error occurs
            }
    }

    // Handler to get available users within a specified radius and age group
    export const getAvailableUsers = async (req, res) => {
        try {
            const { userId } = req.query // Extract query parameters
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }

            const availableUsers = await User.find({
                isActive: true, // Only find active users
                location: {
                    $egoWithin: {
                        $centerSphere: [
                            [user.location.coordinates[0], user.location.coordinates[1]], // Center point
                            user.radius / 6378100 // Convert radius to radians (Earth's radius in meters)
                        ]
                    }
                },
                age: { $gte: user.ageGroup.minAge, $lte: user.ageGroup.maxAge },
                _id: { $ne: user._id } // Exclude the current user
            })
            res.json(availableUsers) // Return available users
        } catch (err) {
            console.error('Error fetching available users:', err)
            res.status(500).json({ message: err.message }) // Return 500 if an error occurs
        }
    }

