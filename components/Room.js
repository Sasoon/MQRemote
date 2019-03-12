// this.props.switchValue is accessible here since we passed it as props to the component in parent App.js
import React from "react";
import { 
  Image, 
  TouchableOpacity,
  Button,
  StyleSheet, 
  Text, 
  View,  
  NativeModules 
} from "react-native";

export class Room extends React.Component {
  render() {
    return (
      <View style={styles.roomView}>
        <TouchableOpacity style={styles.roomButton} onPress={() => this.props.start(this.props.roomNumber)}>
          <Text style={styles.roomText}>{this.props.roomNumber}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  roomView: {
    margin: 15,
    width: 100,
    backgroundColor: '#903749',
    borderColor: '#53354a',
    borderRadius: 3,
    borderWidth: 1,
  },
  roomButton: {
    padding: 5,
  },
  roomText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center' 
  }  
});

export default Room;