import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';

// Button styles
const RoomButton = props => <Button color='red' buttonStyle={styles.roomButton} {...props} />;

export class Room extends React.Component {
  render() {
    return (
      <RoomButton roomNumber="" title={this.props.roomNumber} />    )
  }
}

const styles = StyleSheet.create({
  roomButton: {
    width: 100,
    backgroundColor: 'red',
    color: 'green',
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Room;