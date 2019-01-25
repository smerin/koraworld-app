import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import VideoScreen from "./components/VideoScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  Video: VideoScreen
});

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
