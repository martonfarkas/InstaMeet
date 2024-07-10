import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import UpdateProfile from "./UpdateProfile"

test("updates profile correctly", () => {
  const { getByPlaceholderText, getByText } = render(<UpdateProfile />)

  fireEvent.changeText(getByPlaceholderText("Age"), "25")
  fireEvent.changeText(getByPlaceholderText("Radius (meters)"), "1000")
  fireEvent.changeText(getByPlaceholderText("Min Age"), "18")
  fireEvent.changeText(getByPlaceholderText("Max Age"), "30")
  fireEvent.changeText(getByPlaceholderText("Latitude"), "37.7749")
  fireEvent.changeText(getByPlaceholderText("Longitude"), "-122.4194")

  fireEvent.press(getByText("Update Profile"))

  // Add assertions based on your app logic
})
