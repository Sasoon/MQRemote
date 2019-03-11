import React from "react";
import { Image, TouchableNativeFeedback, Button, StyleSheet, Text, View } from "react-native";

export class Room extends React.Component {
  Start = () => {
    console.log("woot");
    NativeModules.Wol.Start();
    console.log("woot");
  };

  render() {
    return (
      <View style={styles.roomButton}>
        <Button onPress={this.Start}  title={this.props.roomNumber} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  roomButton: {
    margin: 15,
    width: 150,
  }
});

export default Room;