import mongoose from 'mongoose'

//Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String, // GeoJSON type
            enum: ['Point'],
            required: true,
        }
    },
    coordinates: {
        type: [Number], // Array of numbers [longitude, latitude]
        required: true,
    },
    radius: {
        type: Number, // Radius in meters
        default: 0,
    },
    isActive: {
        type: Boolean, // Whether the user is active or not
        default: false,
    },
    statusMessage: {
        type: String,
        default: '',
    },
    statusExpiresAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Default value is current date
    }
})

// Create a 2dsphere index on the location field for geospatial queries
userSchema.index({ location: '2dsphere '})

// Create and export the User model
const User = mongoose.model('User', userSchema)
export default User