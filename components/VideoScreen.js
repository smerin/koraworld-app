import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Video } from "expo";

class VideoScreen extends Component {
  state = {
    mute: false,
    shouldPlay: true
  };
  _handleVideoRef = component => {
    const playbackObject = component;
  };

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay
    }));
  };

  handleRestart = () => {
    this.videoRef.setPositionAsync(0);
  };

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute
    }));
  };

  render() {
    const { width, height } = Dimensions.get("window");

    return (
      <View>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          }}
          shouldPlay={this.state.shouldPlay}
          resizeMode="cover"
          style={{ width, height: 400 }}
          isMuted={this.state.mute}
          ref={this._handleVideoRef}
        />
        <Button
          style={styles.playButton}
          title={this.state.shouldPlay ? "Pause" : "Play"}
          onPress={this.handlePlayAndPause}
        />
        <Button title="Restart" onPress={this.handleRestart} />
      </View>
    );
  }
}

export default VideoScreen;

const styles = StyleSheet.create({
  playButton: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  }
});
