import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../assets/kora-splash.jpg")}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.introText}>Kora World</Text>
          <Button
            style={styles.whiteButton}
            title="Enter"
            color="white"
            onPress={() => this.props.navigation.navigate("Details")}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  textOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  introText: {
    marginBottom: 20,
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});
