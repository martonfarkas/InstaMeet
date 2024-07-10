import React, { useState } from 'react' // Importing necessary modules from React
import { View, TextInput, Button, StyleSheet } from 'react-native' // Importing components from React Native
import axios from 'axios' // Importing axios for making HTTP requests

const UpdateProfile = () => {
  const [age, setAge] = useState('') // State for user's age
  const [radius, setRadius] = useState('') // State for user's search radius
  const [minAge, setMinAge] = useState('') // State for minimum age in age group
  const [maxAge, setMaxAge] = useState('') // State for maximum age in age group
  const [latitude, setLatitude] = useState('') // State for user's latitude
  const [longitude, setLongitude] = useState('') // State for user's longitude
  const [isActive, setIsActive] = useState(false) // State for user's active status

  // Function to handle profile update
  const handleUpdate = async () => {
    try {
      // Sending a PUT request to update user profile
      const response = await axios.put('http://localhost:3001/users/updateProfile', {
        id: 'user-id', // Replace later with actual user ID
        age,
        radius,
        minAge,
        maxAge,
        latitude,
        longitude,
        isActive
      })
      console.log('Profile updated:', response.data) // Log response data
    } catch (error) {
      console.error('Error updating profile:', error) // Log any error
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge} // Update age state
      />
      <TextInput
        style={styles.input}
        placeholder="Radius (meters)"
        value={radius}
        onChangeText={setRadius} // Update radius state
      />
      <TextInput
        style={styles.input}
        placeholder="Min Age"
        value={minAge}
        onChangeText={setMinAge} // Update minAge state
      />
      <TextInput
        style={styles.input}
        placeholder="Max Age"
        value={maxAge}
        onChangeText={setMaxAge} // Update maxAge state
      />
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude} // Update latitude state
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude} // Update longitude state
      />
      <Button title="Update Profile" onPress={handleUpdate} /> // Button to update profile
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20, // Padding for container
  },
  input: {
    height: 40, // Height for input field
    borderColor: 'gray', // Border color
    borderWidth: 1, // Border width
    marginBottom: 10, // Margin bottom
    paddingLeft: 8, // Padding left
  },
})

export default UpdateProfile // Exporting the UpdateProfile component
