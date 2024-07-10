import React, { useEffect, useState } from 'react' // Importing necessary modules from React
import { View, Text, Button, FlatList, StyleSheet } from 'react-native' // Importing components from React Native
import axios from 'axios' // Importing axios for making HTTP requests

const NearbyUsers = () => {
  const [nearbyUsers, setNearbyUsers] = useState([]) // State for storing nearby users
  const [loading, setLoading] = useState(false) // State for loading status

  // Function to fetch nearby users
  const fetchNearbyUsers = async () => {
    setLoading(true) // Set loading to true
    try {
      // Sending a GET request to fetch nearby users
      const response = await axios.get('http://localhost:3001/users/availableUsers', {
        params: {
          userId: 'user-id', // Replace later with actual user ID
        },
      })
      setNearbyUsers(response.data) // Update nearbyUsers state
    } catch (error) {
      console.error('Error fetching nearby users:', error) // Log any error
    } finally {
      setLoading(false) // Set loading to false
    }
  }

  // useEffect hook to fetch nearby users on component mount
  useEffect(() => {
    fetchNearbyUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Button title="Refresh Nearby Users" onPress={fetchNearbyUsers} /> // Button to refresh nearby users
      {loading ? (
        <Text>Loading...</Text> // Display loading text
      ) : (
        <FlatList
          data={nearbyUsers} // Data for FlatList
          keyExtractor={(item) => item._id} // Key extractor for FlatList items
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text>Name: {item.name}</Text> // Display user name
              <Text>Age: {item.age}</Text> // Display user age
              <Text>Status: {item.statusMessage}</Text> // Display user status message
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20, // Padding for container
  },
  userItem: {
    padding: 10, // Padding for user item
    borderBottomWidth: 1, // Border bottom width
    borderBottomColor: 'gray', // Border bottom color
  },
})

export default NearbyUsers // Exporting the NearbyUsers component
