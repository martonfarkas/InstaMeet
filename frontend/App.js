import React from "react" // Importing necessary modules from React
import { StyleSheet, View } from "react-native" // Importing components from React Native
import UpdateProfile from "../UpdateProfile" // Importing UpdateProfile component
import NearbyUsers from "../NearbyUsers" // Importing NearbyUsers component

export default function App() {
  return (
    <View style={styles.container}>
      <UpdateProfile /> // Integrating UpdateProfile component
      <NearbyUsers /> // Integrating NearbyUsers component
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex value for container
    backgroundColor: "#fff", // Background color for container
    padding: 20, // Padding for container
  },
})
