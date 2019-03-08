import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';

export class Room extends React.Component {
  render() {
    return (
      <Button roomNumber=""><Text>{this.props.roomNumber}</Text></Button>
    )
  }
}

export default Room;