import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

class DetailsScreen extends Component {
  render() {
    return (
      <View>
        <Text>My videos</Text>
        <Button
          title="View tutorial"
          onPress={() => this.props.navigation.navigate("Video")}
        />
      </View>
    );
  }
}

export default DetailsScreen;
